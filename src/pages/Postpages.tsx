import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import api from '../services/api';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface FavoritePost {
  id: number;
  title: string;
  body: string;
}

interface RootState {
  favorites: {
    favorites: FavoritePost[];
  };
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Состояние для хранения списка постов
  const [loading, setLoading] = useState<boolean>(true); // Состояние для загрузки
  const [error, setError] = useState<string | null>(null); // Состояние для ошибки

  const favorites = useSelector((state: RootState) => state.favorites.favorites); // Получаем избранные посты из Redux
  const dispatch = useDispatch(); // Хук для dispatch

  useEffect(() => {
    api
      .get('/posts')
      .then((response) => {
        setPosts(response.data); // Записываем данные в состояние
        setLoading(false); // Заканчиваем загрузку
      })
      .catch(() => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []); // Эффект запускается только один раз при монтировании компонента

  const handleAddFavorite = (post: Post) => {
    dispatch(addFavorite(post)); // Добавляем пост в избранное
  };

  const handleRemoveFavorite = (postId: number) => {
    dispatch(removeFavorite(postId)); // Удаляем пост из избранного
  };

  const isFavorite = (postId: number) => {
    return favorites.some((post) => post.id === postId); // Проверяем, находится ли пост в избранном
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
            {isFavorite(post.id) ? (
              <button onClick={() => handleRemoveFavorite(post.id)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => handleAddFavorite(post)}>Add to Favorites</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;





