import { createSlice } from "@reduxjs/toolkit";
// name : reducer의 특정이름을 정의하는 속성
// initalState: state를 초기화하는 속성
// reducers : 컴포넌트에서 state변경요청 시 수행하는 Action기능을 정의하는 속성
export const movieSlice = createSlice({
  name: "movie",
  initialState: {},
  reducers: {},
});

// 컴포넌트에서 reducer 함수를 실행할 수 있게 내보내기
export const MovieReducerActions = movieSlice.actions;

// stote에서 접근할 수 있도록 내보내기
export default movieSlice.reducer;