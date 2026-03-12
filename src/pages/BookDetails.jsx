
import { useParams, Link } from "react-router-dom";
import booksData from "../../data/booksData";

function BookDetails(){

        const { id } = useParams();

        const book = booksData.find(b => b.id === parseInt(id));
        if (!book) return <p>Book not found</p>;

    return(
        <>
        <div>

        <h2>{book.title}</h2>

        <p><strong>Author:</strong> {book.author}</p>

        <p><strong>Category:</strong> {book.category}</p>

        <p><strong>Description:</strong> {book.description}</p>

        <p><strong>Rating:</strong> {book.rating}</p>

        <Link to={`/books/${book.category}`}>Back to Browse</Link>

        </div>
        </>
         )
        }
    export default BookDetails;