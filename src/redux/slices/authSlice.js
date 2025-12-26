import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios/axiosInstance';

// دالة مساعدة لجلب المستخدم من التخزين المحلي بأمان عند بداية تشغيل التطبيق
const getStoredUser = () => {
  try {
    const savedUser = localStorage.getItem('authUser');
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    return null;
  }
};

// 1. Async Thunk لتسجيل الدخول (Login)
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/v1/auth/login', { email, password });
      const accessToken = response.data.data.accessToken;
      const user = response.data.data.user;

      if (accessToken && user) {
        localStorage.setItem('authToken', accessToken);
        localStorage.setItem('authUser', JSON.stringify(user)); // ✅ حفظ المستخدم كاملاً
      }

      return {
        user: user,
        token: accessToken,
        success: response.data.success,
      };
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message || 'خطأ في تسجيل الدخول');
      }
      return rejectWithValue(error.message || 'حدث خطأ غير متوقع');
    }
  }
);

// 2. Async Thunk للتسجيل (حافظت على منطق الـ FormData والـ JSON الخاص بك)
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const endpoint =
        userData.accountType === 'client'
          ? '/api/v1/auth/register-client'
          : '/api/v1/auth/register-expert';

      let response;

      if (userData.accountType === 'expert') {
        const formData = new FormData();
        for (const key in userData) {
          if (['accountType', 'confirmPassword', 'agreedToTerms'].includes(key)) continue;
          if (key === 'cv') {
            if (userData[key] && userData[key] instanceof File) {
              formData.append(key, userData[key]);
            }
            continue; 
          }
          const value = userData[key];
          formData.append(key, value !== undefined && value !== null ? value : "");
        }

        response = await axiosInstance.post(endpoint, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

      } else { 
        // منطق العميل (Client)
        const jsonData = {};
        for (const key in userData) {
          if (!['accountType', 'confirmPassword', 'agreedToTerms', 'cv'].includes(key)) {
            if (key === 'gender') {
              jsonData[key] = userData[key] === 'أنثى' ? 'female' : userData[key] === 'ذكر' ? 'male' : userData[key];
            } else {
              jsonData[key] = userData[key];
            }
          }
        }
        response = await axiosInstance.post(endpoint, jsonData);
      }

      const accessToken = response.data.data?.accessToken || null;
      const user = response.data.data?.user || null;

      if (accessToken && user) {
        localStorage.setItem('authToken', accessToken);
        localStorage.setItem('authUser', JSON.stringify(user)); // ✅ حفظ البيانات
      }

      return {
        user,
        token: accessToken,
        success: response.data.success,
        registeredEmail: userData.email,
        accountType: userData.accountType,
      };
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message || 'خطأ في التسجيل');
      }
      return rejectWithValue(error.message || 'حدث خطأ غير متوقع');
    }
  }
);

// 3. Async Thunk لتأكيد البريد الإلكتروني (Verify Email)
export const verifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  async ({ email, code }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/v1/auth/verify', { email, code });
      const accessToken = response.data.data?.accessToken || null;
      const user = response.data.data?.user || null;

      if (accessToken && user) {
        localStorage.setItem('authToken', accessToken);
        localStorage.setItem('authUser', JSON.stringify(user)); // ✅ حفظ البيانات
      }

      return {
        ...response.data,
        user: user,
        token: accessToken,
        success: response.data.success,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل تأكيد البريد');
    }
  }
);

// 4. إعادة إرسال الكود
export const resendCode = createAsyncThunk(
  'auth/resendCode',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/v1/auth/resendCode', { email });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل إعادة إرسال الكود');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // ✅ الأهم: قراءة المستخدم والتوكن من localStorage عند الريفريش
    user: getStoredUser(),
    token: localStorage.getItem('authToken') || null,
    loading: false,
    error: null,
    success: false,
    registeredEmail: null,
    registeredAccountType: null,
    resendLoading: false,
    resendSuccess: false,
    resendMessage: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.success = false;
      state.registeredEmail = null;
      state.registeredAccountType = null;
      // ✅ مسح البيانات من التخزين
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
    },
    clearAuthMessages: (state) => {
      state.error = null;
      state.success = false;
      state.resendLoading = false;
      state.resendSuccess = false;
      state.resendMessage = null;
    },
    setRegisteredEmail: (state, action) => {
      state.registeredEmail = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('authUser', JSON.stringify(action.payload)); // مزامنة يدوية إذا احتجت
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      // Register
      .addCase(registerUser.pending, (state) => { state.loading = true; })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.registeredEmail = action.payload.registeredEmail;
        state.registeredAccountType = action.payload.accountType;
        state.token = action.payload.token || state.token;
        state.user = action.payload.user || state.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Verify
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        if (action.payload.token && action.payload.user) {
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      })
      // Resend
      .addCase(resendCode.pending, (state) => { state.resendLoading = true; })
      .addCase(resendCode.fulfilled, (state, action) => {
        state.resendLoading = false;
        state.resendSuccess = true;
        state.resendMessage = action.payload.message;
      })
      .addCase(resendCode.rejected, (state, action) => {
        state.resendLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, clearAuthMessages, setRegisteredEmail, setUser } = authSlice.actions;
export default authSlice.reducer;