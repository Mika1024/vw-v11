import { configureStore } from '@reduxjs/toolkit';

import { checkRes } from '../../BLL/checkOne';

export const store = configureStore({
    reducer: {
        checkRes
    }
})
