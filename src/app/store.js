import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice';
import cartReducer from './cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart' , 'userDetails'], 
};


const persistedReducer = persistReducer(persistConfig, combineReducers({
  userDetails: userReducer,
  cart: cartReducer
}));


export const store = configureStore({
  reducer: persistedReducer,
});


export const persistor = persistStore(store);
