import { combineReducers } from "@reduxjs/toolkit";
import { covidCaseSlice } from "./slice";

const reducers = combineReducers({
    cases: covidCaseSlice.reducer
})

export default reducers