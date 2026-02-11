import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios/axiosInstance';

export const fetchAllExperts = createAsyncThunk(
  'experts/fetchAllExperts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/v1/users/experts');
      return response.data.data || response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل تحميل قائمة المستشارين');
    }
  }
);

export const fetchExpertById = createAsyncThunk(
  'experts/fetchExpertById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/v1/users/${id}`);
      // تأكدي من مسار الداتا من الـ API (غالباً response.data.data)
      return response.data.data.user || response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل تحميل بيانات المستشار');
    }
  }
);

export const fetchTopExperts = createAsyncThunk(
  'experts/fetchTopExperts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/v1/users/topTenExperts');
      return response.data.data || response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'فشل تحميل قائمة المستشارين');
    }
  }
);

const expertsSlice = createSlice({
  name: 'experts',
  initialState: {
    allExperts: [],
    topExperts: [],
    selectedExpert: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedExpert: (state) => {
      state.selectedExpert = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // جلب الكل
      .addCase(fetchAllExperts.pending, (state) => { state.loading = true; })
      .addCase(fetchAllExperts.fulfilled, (state, action) => {
        state.loading = false;
        state.allExperts = action.payload;
      })
      .addCase(fetchAllExperts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ✅ جلب خبير محدد
      .addCase(fetchExpertById.pending, (state) => { 
        state.loading = true; 
        state.error = null; // تصفير الخطأ عند بدء طلب جديد
      })
      .addCase(fetchExpertById.fulfilled, (state, action) => { 
        state.loading = false;
        state.selectedExpert = action.payload; 
      })
      .addCase(fetchExpertById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // تخزين رسالة الخطأ لو فشل الطلب
      })
      .addCase(fetchTopExperts.fulfilled, (state, action) => {
        state.loading = false;
        state.topExperts = action.payload;
      });
  },
});

export const { clearSelectedExpert } = expertsSlice.actions;
export default expertsSlice.reducer;