import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: string | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.user = action.payload; // Сохраняем имя пользователя после успешного логина
    },
    logout(state) {
      state.user = null; // Очищаем состояние при логауте
    },
  },
});

export const { login, logout } = authSlice.actions; // Экспортируем экшены для использования в компонентах
export default authSlice.reducer; // Экспортируем редьюсер
