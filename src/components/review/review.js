import './review.css'; //Link to the styling
import Stars from '../stars/stars';

export default function Review({ review }) { //Organizes the two portions of a review; the text, and the rating, displaying the rating using the Stars component
    return (
    <div className="review">
        <Stars rating={review.rating} /> 
        <p>{review.text}</p>
    </div>
    );
}