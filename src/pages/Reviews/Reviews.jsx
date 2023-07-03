import React, { useEffect, useState } from 'react';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `/movies/get-movie-reviews?movieId=${movieId}`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length > 0 ? (
        <RevU>
          {reviews.map(review => (
            <RevLi key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </RevLi>
          ))}
        </RevU>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default Reviews;
