import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios/axiosInstance';

// 1. جلب قائمة المستشارين غير الموثقين
export const fetchPendingExperts = createAsyncThunk(
  'admin/fetchPendingExperts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/v1/users/not-verify/experts');
      const expertsList = response.data?.data?.experts || [];
      return expertsList;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل جلب قائمة الانتظار');
    }
  }
);

// ✅ الجديد: جلب كل المستخدمين (مطابق لصورة Postman)
export const fetchAllUsers = createAsyncThunk(
  'admin/fetchAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/v1/users');
      // نفترض أن البيانات تأتي في users أو data
      return response.data?.data?.users || response.data?.data || [];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل جلب قائمة المستخدمين');
    }
  }
);

// 2. قبول وتوثيق المستشار
export const acceptExpert = createAsyncThunk(
  'admin/acceptExpert',
  async (expertId, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.patch(`/api/v1/users/accept/${expertId}`);
      dispatch(fetchPendingExperts());
      return expertId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل في قبول المستشار');
    }
  }
);

// 3. رفض المستشار
export const rejectExpert = createAsyncThunk(
  'admin/rejectExpert',
  async (expertId, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.delete(`/api/v1/users/reject/${expertId}`);
      dispatch(fetchPendingExperts());
      return expertId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل في رفض الطلب');
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    pendingExperts: [],
    allUsers: [], // ✅ إضافة حالة المستخدمين هنا
    loading: false,
    error: null,
  },
  reducers: {
    clearAdminError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPendingExperts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPendingExperts.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingExperts = action.payload;
      })
      .addCase(fetchPendingExperts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // ✅ معالجة حالة جلب كل المستخدمين
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(acceptExpert.fulfilled, (state, action) => {
        state.pendingExperts = state.pendingExperts.filter(
          (expert) => expert._id !== action.payload
        );
      })
      
      .addCase(rejectExpert.fulfilled, (state, action) => {
        state.pendingExperts = state.pendingExperts.filter(
          (expert) => expert._id !== action.payload
        );
      })

      .addMatcher(
        (action) => action.type.endsWith('/pending') && (action.type.includes('acceptExpert') || action.type.includes('rejectExpert')),
        (state) => { state.loading = true; }
      )
      .addMatcher(
        (action) => (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) && (action.type.includes('acceptExpert') || action.type.includes('rejectExpert')),
        (state) => { state.loading = false; }
      );
  },
});

export const { clearAdminError } = adminSlice.actions;
export default adminSlice.reducer;