import { createAction, createReducer, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

const changeStyleMoon = createAction('style/changeMoon')
const changeStyleSun = createAction('style/changeSun')

const initialState = {
    color: "moon"
}
  const styleSlice = createSlice({
    name: "post",
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
    builder.addCase(changeStyleMoon, (state, action) => {
        if(state.color == "sun"){
            state.color = "moon"
            document.body.style.backgroundColor = "#121212";
        }
      }).addCase(changeStyleSun, (state, action) => {
        if(state.color == "moon"){
            state.color = "sun"
            document.body.style.backgroundColor = "#ef476f";
        }
  })
    }
  })

  export const styleReducer = styleSlice.reducer;
