import "../css/MovieCard.css";
function MovieCard({ movie }) {
    const placeholderImage = "https://via.placeholder.com/300x450?text=" + encodeURIComponent(movie.title);
    
    function onfavoriteClick() {
        alert("favorite clicked");
    }
    
    return <div className="movie-card">
        <div className='movie-poster'>
            <img 
                src={movie.url || placeholderImage} 
                alt={movie.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className='movie-overlay'>
                <button className="favorite-button" onClick={onfavoriteClick}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard;