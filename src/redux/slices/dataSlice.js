import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getApi, postApi, putApi } from '@/services/api';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await getApi('/data');
  return response.data;
});

export const addData = createAsyncThunk('data/addData', async (newRecord) => {
  const response = await postApi('/data', newRecord);
  return response.data;
});

export const updateData = createAsyncThunk('data/updateData', async (updatedRecord) => {
  const response = await putApi(`/data/${updatedRecord.id}`, updatedRecord);
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: { data: [] },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.data.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      });
  },
});

export default dataSlice.reducer;
