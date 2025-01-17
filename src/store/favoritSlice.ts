// store/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritePost {
  id: number;
  title: string;
  body: string;
}

interface FavoritesState {
  favorites: FavoritePost[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<FavoritePost>) {
      state.favorites.push(action.payload); // Добавляем новый пост в избранное
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(post => post.id !== action.payload); // Удаляем пост из избранного
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
