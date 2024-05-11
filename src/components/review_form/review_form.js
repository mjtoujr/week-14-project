import React, { useState } from 'react';
import './review_form.css' //Link to the styling

export default function ReviewForm({ onSubmit }) {
    const [rating, setRating] = useState(0); /* Starts the rating at 0 */
    const [reviewText, setReviewText] = useState(''); /* Starts the text as empty */

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({ rating, text: reviewText }); /* Passes the submitted information as a new review */
        setRating(0); /* Resets the star rating */
        setReviewText(''); /* Resets the text field */
    }

    return (
        <div className= 'review-form'>
            <h4>Leave your own review!</h4>
            <form onSubmit={handleSubmit}> {/* utilizes the function created above */}
                <label htmlFor='stars'>Star Rating</label> {/* Leaving a number from 0-5 as a rating */}
                <input
                    id='stars'
                    type='number'
                    min='0'
                    max='5'
                    value={rating}
                    onChange={(event) => setRating(parseInt(event.target.value))}
                />
                <label htmlFor='review' >Your Review</label> {/* Typing a written review */}
                <input
                    type="text"
                    id="review"
                    onChange={(event) => setReviewText(event.target.value)}
                    placeholder="Write your review here!"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}