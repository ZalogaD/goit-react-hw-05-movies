import React, { useEffect, useState } from 'react';

const MovieDetails = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `/movies/get-movie-details?movieId=${movieId}`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, overview, release_date, poster_path } = movieDetails;

  return (
    <Card>
      <h2>{title}</h2>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
    </Card>
  );
};

export default MovieDetails;
