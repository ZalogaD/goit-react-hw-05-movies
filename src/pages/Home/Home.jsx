import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api'; // Використовуйте вашу функцію для отримання списку популярних фільмів

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Викликайте функцію для отримання списку популярних фільмів при завантаженні компонента
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const response = await getTrendingMovies(); // Викликайте вашу функцію для отримання списку популярних фільмів
      setMovies(response.results);
    } catch (error) {
      console.log('Error fetching trending movies:', error);
    }
  };

  return (
    <div>
      <h2>Popular Movies</h2>
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          {/* Додайте решту необхідної інформації про фільм, якщо потрібно */}
        </div>
      ))}
    </div>
  );
};

export default Home;
ф;
