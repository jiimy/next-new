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
    // increment: (state, action) => {
    //   state.number += 1; // counter type의 number 키값
    // },
    increment: (state: Counter, action) => {
      // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정해주면 된다.
      state.number += action.payload;
    },
    decrement: (state, action) => {
      state.number -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
