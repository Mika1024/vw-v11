import { configureStore } from '@reduxjs/toolkit';
import  {postsReducer} from './post';
import  {styleReducer} from './style';
import { authRes } from './auth';
import { postsRes } from '../components/blog/posts';
import { createRes } from './creatpost';
import { searchRes } from "./checkOne"

export const store = configureStore({
    reducer: {
         postsReducer,
         styleReducer,
         postsRes,
         authRes,
         createRes,

    }
})
