import { createSlice } from "@reduxjs/toolkit";
import { covidCaseList } from "../service";


const initialState = {
    covidCaseListRes: { data: [], isFetching: false, error: null }
}
export const covidCaseSlice = createSlice({
    name: "covidCaseSlice",
    initialState,
    extraReducers: (builder) => {
        const asyncActionCases = [
          { api: covidCaseList, name: "covidCaseListRes" },
        ];
        asyncActionCases.map((asyncAction) => {
          builder
            .addCase(asyncAction.api.fulfilled, (state, { payload }) => {
              state[asyncAction.name].isFetching = false;
              state[asyncAction.name].data = payload;
            })
            .addCase(asyncAction.api.pending, (state) => {
              state[asyncAction.name].isFetching = true;
              state[asyncAction.name].error = null;
            })
            .addCase(asyncAction.api.rejected, (state, { payload }) => {
              state[asyncAction.name].isFetching = false;
              state[asyncAction.name].error = payload;
            });
        });
      },
})

export const { covidcaseDispatch } = covidCaseSlice.actions;