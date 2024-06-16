import { createAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

export const getAll = createAction('GET_ALL')
export const getSearch = createAction('GET_SEARCH')
let end = false

export const addPosti = createAsyncThunk(
  'users/fetchByIdStatus',
  async (text, storei) => {

    const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/all/' + 1)

    let i = 0
  for(let key in response.data){
    i++
  }
  if(i < 12){
    end = true
  }
   return  response.data
  }
)
export const addPostiafterSerach = createAsyncThunk(
  'users/addPostiafterSerach',
  async (text, storei) => {
    const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/all/' + 1)
    let i = 0
  for(let key in response.data){
    i++
  }
  if(i < 12){
    end = true
  }
   return  response.data
  }
)
export const addCreate = createAsyncThunk(
  'users/fetchBySearch',
  async (text) => {
    try{
    const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/search/' + text)
    let treat = []
    let num = 0;
    for(let key in response.data){
      num++
    }
    for(let i = 0; i < num; i++){
      treat[i] = response.data[i]
    }
    return {treat: treat, text: text}

    } catch(err){
        console.log(err)
    }
  }
)
export const addPostNext = createAsyncThunk(
    'usersNew/fetchByIdStatus',
    async (list, storei) => {
      const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/all/' + (list+1))
         let k = 0;
      const web = [] 
         for(let key in storei.getState().postsRes.posts){
          k++
         }
        for(let i = 0; i < k; i++){
            web[i] = storei.getState().postsRes.posts[i]
        }
        let j = 0
        let num = 0;
        for(let key in response.data){
            num++
        }
        if (num < 12){
            end = true
        }
        for(let i = 12*(list); i < 12*(list)+num; i++){
            web[i] = response.data[j]
            j++
        }
      return web
    }
  )
const initialState = {
    posts: [],
    endl: end,
    search: false,
    load: false,
    text: "",
    list: 1
}
  const postsSlce = createSlice({
    name: "posts",
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>{
      builder.addCase(addPosti.fulfilled, (state, action) => {
        state.posts = action.payload
        state.load = true
        state.endl = end
      })
      .addCase(addPostNext.fulfilled, (state, action) => {
        state.posts = action.payload
        state.list++
        state.endl = end
      }
      )
      .addCase(addCreate.fulfilled, (state, action) => {
        console.log(action.payload)
        state.posts = action.payload.treat
        state.text = action.payload.text
        state.load = true
        state.search = true
      })
      .addCase(addPostiafterSerach.fulfilled, (state, action) => {
        state.posts = action.payload
        state.search = false 
        state.list = 1
        state.text = ""
        state.endl = end
      })
    }
  })

  export const postsRes = postsSlce.reducer;

 
