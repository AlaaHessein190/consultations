import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios/axiosInstance';

export const fetchMe = createAsyncThunk(
  'user/fetchMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/v1/users/me');
      return response.data.data.user; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل في جلب البيانات');
    }
  }
);

export const updateMe = createAsyncThunk(
  'user/updateMe',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.patch('/api/v1/users/me', userData);
      dispatch(fetchMe()); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ أثناء التحديث');
    }
  }
);

// --- تعديل رفع السيرة الذاتية بناءً على الصورة ---
export const updateCV = createAsyncThunk(
  'user/updateCV',
  async (file, { rejectWithValue, dispatch }) => {
    try {
      const formData = new FormData();
      formData.append('cv', file); // تأكد أن المفتاح 'cv' هو ما يتوقعه الباك إند
      const response = await axiosInstance.post('/api/v1/users/upload-cv', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      dispatch(fetchMe()); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل رفع السيرة الذاتية');
    }
  }
);

// حذف السيرة الذاتية (بافتراض وجود endpoint للحذف أو إرسال null)
export const removeCV = createAsyncThunk(
  'user/removeCV',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      // إذا كان الباك إند يوفر endpoint خاص للحذف:
      await axiosInstance.delete('/api/v1/users/delete-cv');
      dispatch(fetchMe()); 
      return { success: true };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل حذف الملف');
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (file, { rejectWithValue, dispatch }) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file); 
      const response = await axiosInstance.post('/api/v1/users/upload-avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      dispatch(fetchMe()); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل رفع الصورة');
    }
  }
);

export const removeAvatar = createAsyncThunk(
  'user/removeAvatar',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.delete('/api/v1/users/delete-avatar');
      dispatch(fetchMe()); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'حدث خطأ أثناء حذف الصورة');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { profileData: null, loading: false, uploading: false, error: null },
  reducers: {
    resetUserState: (state) => { state.profileData = null; state.error = null; state.loading = false; }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchMe.fulfilled, (state, action) => { state.loading = false; state.profileData = action.payload; })
      .addCase(fetchMe.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      
      // التعامل مع حالات الرفع (CV و Avatar) لظهور لودر موحد إذا أردت
      .addMatcher(
        (action) => action.type.endsWith('/pending') && (action.type.includes('Avatar') || action.type.includes('CV')),
        (state) => { state.uploading = true; }
      )
      .addMatcher(
        (action) => (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) && (action.type.includes('Avatar') || action.type.includes('CV')),
        (state) => { state.uploading = false; }
      );
  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;