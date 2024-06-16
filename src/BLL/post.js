import { createAction, createReducer, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

export const getAll = createAction('GET_ALL')

export const addPost = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/top')
    return response.data
  }
)
const initialState = {
    posts: [],
    load: false
}
  const postsSlce = createSlice({
    name: "post",
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
      builder.addCase(addPost.fulfilled, (state, action) => {
        state.posts = action.payload
        state.load = true
      })
    }
  })

  export const postsReducer = postsSlce.reducer;
