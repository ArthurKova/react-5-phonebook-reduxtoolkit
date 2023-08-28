import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneBookApi } from './phonebook/phonebookApi';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [...getDefaultMiddleware(), phoneBookApi.middleware];

const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  devTools: true,
  middleware,
});

export { store };

setupListeners(store.dispatch);
