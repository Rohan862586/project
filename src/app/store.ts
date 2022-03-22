
import { configureStore } from '@reduxjs/toolkit';
import reducerSlice from '../reducer/reducerSlice';
import { newApi } from '../api/api';


export const store = configureStore({
  reducer: {
     allvalues: reducerSlice,
     [newApi.reducerPath]: newApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newApi.middleware)
});



