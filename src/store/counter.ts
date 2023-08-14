import { createSlice } from "@reduxjs/toolkit";

type Counter = {
  number: number;
};

const initialState: Counter = {
  number: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: Counter, action) => {
      // state.number += action.payload;
        state.number += 1; // counter type의 number 키값
    },
    decrement: (state, action) => {
      state.number -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
