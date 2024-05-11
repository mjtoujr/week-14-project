import Review from '../review/review' //Importing the Review component

export default function ReviewList({ reviews }) {
    return (
        <div>
            {reviews.map((review) => (
                <Review key={review.id} review={review} /> //this will return a list of review components from the reviews array
        ))}
        </div>
    );
}