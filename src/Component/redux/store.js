import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, formReducer);

const store = configureStore({ reducer: persistedReducer, devTools: true });

const persistor = persistStore(store);

export { store, persistor };
