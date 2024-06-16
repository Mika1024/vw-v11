import { configureStore } from '@reduxjs/toolkit';
import { searchRes } from '../../BLL/checkOne';
import { postsRes } from './posts';

export const store = configureStore({
    reducer: {
         postsRes
    }
})
