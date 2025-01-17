
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice'; // Импортируем экшен logout
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

interface RootState {
  auth: {
    user: string | null;
  };
}

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout()); // Выполняем логаут
    navigate('/login'); // Редиректим на страницу логина
  };

  const handleGoToPosts = () => {
    navigate('/posts'); // Переход на страницу с постами
  };

  return (
    <div>
      <h1>Welcome {user ? user : 'Guest'}</h1>
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button> {/* Кнопка для выхода */}
          <button onClick={handleGoToPosts}>Go to Posts</button> {/* Кнопка для перехода на страницу постов */}
          <button onClick={() => navigate('/freelance-project/src/pages/FavoritiesPage.tsx')}>Go to Favorites</button> {/* Кнопка для перехода в избранное */}

        </>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default HomePage;
