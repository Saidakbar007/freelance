

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import PostsPage from './pages/Postpages';
import PostDetailPage from './pages/PostDetailPage';
import FavoritesPage from './pages/FavoritiesPage'; // Импортируем страницу избранных

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} /> {/* Добавляем маршрут для избранных */}
      </Routes>
    </Router>
  );
};

export default App;

