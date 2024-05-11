const movies = [ //This object contains the traits for two movies, along with several sample reviews.
    {
        id: 1,
        title: "The Ides of Octember",
        synopsis: "A future psychologist uses a dream-molding machine to help a desperate scientist regain her sight, but questions if he's lost control of his own visions.",
        reviews: [
            {id: 1, text: "A stellar adaptation of the old story. Very thought-provoking, and the drive in the country is a corny guilty pleasure of mine.", rating: 5 },
            {id: 2, text: "I'm sorry, but every time the dog talks, I start thinking of Air Bud and all the Buddies movies, and I can't take anything else seriously.", rating: 2 }
        ]
    },
    {
        id: 2,
        title: "While the Gods Laugh",
        synopsis: "Three outcasts search for a forbidden book of ancient knowledge, aided by a cursed, soul-eating sword.",
        reviews: [
            {id: 3, text: "Some of my favorite actors clearly having the time of their lives!", rating: 4 },
            {id: 4, text: "I always fall asleep before they get through the swamp.", rating: 1 },
            {id: 5, text: "The special effects are cheesey, but I try to watch it with friends at least once a year.", rating: 3 }
        ]
    }
];

movies.forEach(movie => {
    const totalRating = movie.reviews.reduce((acc, review) => acc + review.rating, 0);
    movie.rating = totalRating / movie.reviews.length;
});

export default movies;