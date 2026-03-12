import { Link } from "react-router-dom"

function CategoryCard({ title, image }) {
  return (
    <Link to={`/books/${title}`}>
    <div className="category-card">
      <img src={image} alt={title} className="genre-image" width="100px" height="100px" />

      <h4>{title}</h4>
  </div>
    </Link>
  )
}

export default CategoryCard