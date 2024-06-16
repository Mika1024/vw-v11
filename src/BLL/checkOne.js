import { createAction, createReducer, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
export const ActonCr = createAction('SET_SEARCH')

const initialState = {
    postsSearch: [],
    load: false,
    list: 1
}
  const searchSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
      builder.addCase(ActonCr, (state, action) => {
        state.text = action.payload
      })
    }
  })

  export const searchRes = searchSlice.reducer;
 /*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoid2VsbGZpbmUucmVib290LnRlY2hub2xvZ3kub3JnIn0.MIXOwkMmw7saqCikG8vkkuWRTwepe8CYY6aa0He-bhg*/