import { Link } from "react-router-dom";
import booksData from "../../data/booksData";


import adventure from "../img/Adventure.png"
import biography from "../img/Biography.png";
import historical from "../img/Historical.png";
import horror from "../img/Horror.png";
import romance from "../img/Romance.png";
import crime from "../img/Crime.png";
import mystery from "../img/Mystery.png";
import fantasy from "../img/Fantasy.png";
import thriller from "../img/Thriller.png";
import fiction from "../img/Fiction.png";

function Home(){

            
    const genres = [
  { name: "Adventure", image: adventure },
  { name: "Fiction", image: fiction },
  { name: "Biography", image: biography },
  { name: "Historical", image: historical },
  { name: "Horror", image: horror },
  { name: "Romance", image: romance },
  { name: "Crime", image: crime },
  { name: "Mystery", image: mystery },
  { name: "Fantasy", image: fantasy },
  { name: "Thriller", image: thriller }
];
   
 // Filter popular books according to rating (top 8)
       const popularBooks = booksData.slice(0, 6);

    return (
        <>
   <div className="home">

      <h2>Welcome Smruti....</h2>
      <p>Discover your favorite books by genre.</p>

      <hr className="section-divider" />

      {/* Genre Section */}
       <h3 className="genre-title">
  View Books by<strong style={{ color: "green" }}> Genre</strong>
    </h3>
      
    <hr className="section-divider" />
      <div className="genre-scroll">

<div className="genre-container">

{genres.map((genre,index)=>(
<Link key={index} to={`/books/${genre.name}`} className="category-card">

<img
src={genre.image}
alt={genre.name}
className="genre-image"
/>

<h4>{genre.name}</h4>

</Link>
))}

</div>
</div>

      {/* Popular Books */}
      <h3>
        View by <strong style={{ color: "red" }}>Popularity</strong>
       </h3>
          <hr className="section-divider" />
          
      <div className="popular-scroll">

<div className="popular-container">

{popularBooks.map((book)=>(
<div key={book.id} className="book-card">

<img
src={book.image}
alt={book.title}
className="book-image"
/>

<h4>{book.title}</h4>

<p>{book.author}</p>
<p>⭐ {book.rating}</p>

<Link to={`/book/${book.id}`} className="details-btn">
View Details
</Link>

</div>
))}

</div>

</div>

</div>

<hr className="section-divider"/>

<footer>Copyright 2026 Library</footer>

</>
);
}

export default Home;