import React from "react";
import { Link } from "react-router-dom";



function BookCard({ book }) {


  return (
    <div className="book-card">

      <img 
        src={book.image} 
        alt={book.title} 
        className="book-image"
      />

      <h3>{book.title}</h3>

      <p>Author: {book.author}</p>

      <p className="rating">Rating: {book.rating} / 5</p>

      <Link to={`/book/${book.id}`} className="view-btn">
        View Details
      </Link>

    </div>
  );
}

export default BookCard;