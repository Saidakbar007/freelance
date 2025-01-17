// PostDetailPage.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import api from '../services/api';
import { RootState } from '../store/store'; // Импортируем RootState

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const favorites = useSelector((state: RootState) => state.favorites.favorites); // Используем RootState
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      api
        .get(`/posts/${id}`)
        .then((response) => {
          setPost(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError('Error fetching post data');
          setLoading(false);
        });
    }
  }, [id]);

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
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          {isFavorite(post.id) ? (
            <button onClick={() => handleRemoveFavorite(post.id)}>Remove from Favorites</button>
          ) : (
            <button onClick={() => handleAddFavorite(post)}>Add to Favorites</button>
          )}
        </>
      )}
    </div>
  );
};

export default PostDetailPage;


