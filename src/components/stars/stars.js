import './stars.css'; //Link to the styling

export default function Stars({ rating }) {
    const stars = []; //Will fill in 0-5 stars as needed to match the movie's rating
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
        stars.push(<span key={i} className="star">★</span>); //Filled star
        } else {
        stars.push(<span key={i} className="star">☆</span>); //Empty star
        }
    }
    return stars;
}