// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import favoritesReducer from './favoritesSlice';

export interface RootState {
  favorites: {
    favorites: { id: number; title: string; body: string }[];
  };
  auth: {
    user: string | null;
  };
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
  },
});

export default store;
