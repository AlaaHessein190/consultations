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
      // تمرير كائن الخطأ الكامل ليتمكن المكون من قراءة رسائل الـ Validation
      return rejectWithValue(error.response?.data || 'حدث خطأ أثناء التحديث');
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
      .addCase(updateMe.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(updateMe.fulfilled, (state) => { state.loading = false; })
      .addCase(updateMe.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addMatcher(
        (action) => action.type.endsWith('/pending') && (action.type.includes('updateAvatar') || action.type.includes('removeAvatar')),
        (state) => { state.uploading = true; }
      )
      .addMatcher(
        (action) => (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) && (action.type.includes('updateAvatar') || action.type.includes('removeAvatar')),
        (state) => { state.uploading = false; }
      );
  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;