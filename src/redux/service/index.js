import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API = process.env.REACT_APP_BASE_API

export const covidCaseList = createAsyncThunk(
    "get-covidcases",
    async (thunkAPI) => {
      try {
        const response = await axios.get(`${API}/covidcases/states/user`);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  