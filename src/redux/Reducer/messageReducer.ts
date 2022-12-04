import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface MessageState {
  data: any;
}

const initialState: MessageState = {
  data: [],
};

export const MessageReducer = createSlice({
  name: 'message',
  initialState,
  reducers: {
    allData: state => {},
  },
});
