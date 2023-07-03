import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from '../pages/Reviews/Reviews';
import Cast from '../pages/Cast/Cast';
import React, { lazy, Suspense } from 'react';

import Cont from './Container/Cont';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const Cast = lazy(() => import('../pages/Cast/Cast'));

const App = () => {
  return (
    <Cont>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies :movieId" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Cont>
  );
};

export default App;
