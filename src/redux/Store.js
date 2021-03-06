import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { CartSlice } from '../redux/CartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'persist-key',
  storage
}

const persistedReducer = persistReducer(persistConfig, CartSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persister = persistStore(store);

export default store;
export { persister }

