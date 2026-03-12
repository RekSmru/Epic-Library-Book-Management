
import { useParams , Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function BrowseBooks(){
    
    const { category } = useParams();

  const books = useSelector((state) => state.books.books) || [];
console.log(books);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");

  const currentCategory = category || "all";

  const filteredBooks = books.filter((book) => {

    const matchCategory =
      currentCategory === "all" ||
      book.category?.toLowerCase() === currentCategory.toLowerCase();

    const matchGenre =
      genre === "all" ||
      book.category?.toLowerCase() === genre.toLowerCase();

    const matchSearch =
      book.title?.toLowerCase().includes(search.toLowerCase()) ||
      book.author?.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchGenre && matchSearch;

  });

  return (
<>
    <div className="browse-page">

      <h1>Browse Books</h1>

      {/* Search */}

      <input
        type="text"
        placeholder="Search by Title or Author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Genre */}

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="all">Browse Genre</option>
        <option value="Adventure">Adventure</option>
        <option value="Fiction">Fiction</option>
        <option value="Biography">Biography</option>
        <option value="Historical">Historical</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Crime">Crime</option>
        <option value="Mystery">Mystery</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Thriller">Thriller</option>
      </select>

      {/* Books */}

      <div className="book-grid">

        {filteredBooks.length === 0 ? (
          <p>No books found</p>
        ) : (
          filteredBooks.map((book) => (

            <div key={book.id} className="book-card">

              <img src={book.image} alt={book.title} width="120" />

              <h3>{book.title}</h3>

              <p>{book.author}</p>

              <Link to={`/book/${book.id}`}>
                View Details
              </Link>

            </div>

          ))
        )}

      </div>

      <Link to="/">← Return to Home</Link>

    </div>

        </>
    )
}
export default BrowseBooks;