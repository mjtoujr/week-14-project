import React, { useState } from 'react';
import ReviewList from '../review_list/review_list';
import ReviewForm from '../review_form/review_form'; //Imports are set
import './movie.css'; //Link to the styling

export default function Movie({ movie }) {
    const [reviews, setReviews] = useState(movie.reviews);  /* Links the useState method to adding new reviews */
    
    function addReview(review) {  /* Function for adding submitted review information as a new review on the list */
        const newReview = { id: Date.now(), ...review };
        setReviews([...reviews, newReview]);
    }

    return(  /* Setting up formatting for all movies and their properties */
        <div className='movie-details'>
            <h2>{movie.title}</h2>
            <p>{movie.synopsis}</p>
            <h3>Reviews</h3>
            <ReviewList reviews={reviews} />
            <ReviewForm onSubmit={addReview} />  {/* Linking the ReviewForm component to the addReview function above */}
        </div>
    );
}