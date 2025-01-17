
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface FavoritePost {
  id: number;
  title: string;
}

interface RootState {
  favorites: {
    favorites: FavoritePost[];
  };
}

const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites); // Получаем избранные посты из Redux

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite posts yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;

