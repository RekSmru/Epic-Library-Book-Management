import { Link } from "react-router-dom";
import "../App.css";

function Header(){
    return (
    <>
       <nav className="navbar">

      <h3 className="logo">Epic Library</h3>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books/all">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>

    </nav>
    </>
    )
}
export default Header;