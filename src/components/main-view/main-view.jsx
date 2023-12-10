import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {const [movies] = useState([
    { id: 1, 
        title: "Inception", 
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", 
        image: "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i" ,
    genre: "Action",
    director: "Christopher Nolan"},   
        
    { id: 2, 
        title: "The Shawshank Redemption", 
        description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.", 
        image: "https://www.imdb.com/title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i",
    genre: "Drama",
    director: "Frank Darabont" },
    { id: 3, 
        title: "Gladiator", 
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", 
        image: "https://via.placeholder.com/150",
    genre: "Action",
    director: "Ridley Scott" }

    ,]);
    
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    if (selectedMovie) {
        return (
    <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />);}

    if (movies. length === 0) {
        return(
<div>The list is empty!</div>);}
else {
    return (
        <div>
            {movies.map((movie) => {
                return (
                <MovieCard 
                movie={movie} 
                onMovieClick={(newSelectedMovie) => {setSelectedMovie(newSelectedMovie); }} />
            );
                })}
        </div>
    );
            }
};
