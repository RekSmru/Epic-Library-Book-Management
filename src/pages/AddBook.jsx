import {useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddBook(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form,setForm] = useState({
    title:"",
    author:"",
    pages:"",
    genre:"",
    rating:"",
    image:""
  });

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    // Form validation
    if(!form.title || !form.author || !form.pages || !form.genre || !form.rating || !form.image){
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      pages: form.pages,
      category: form.genre,
      rating: form.rating,
      image: form.image
    };

    dispatch(addBook(newBook));

    navigate("/books/all");
  };

  return(
    <>
    <div className="add-book">

      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        name="title"
        placeholder="Book Title"
        onChange={handleChange}
        />

        <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={handleChange}
        />

        <input
        type="number"
        name="pages"
        placeholder="Pages"
        onChange={handleChange}
        />

        <input
        type="text"
        name="genre"
        placeholder="Genre"
        onChange={handleChange}
        />

        <input
        type="number"
        name="rating"
        placeholder="Rating"
        step="0.1"
        onChange={handleChange}
        />

        <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        />

        <button type="submit">
          Submit Book
        </button>

      </form>

    </div>
        </>
    )
}
export default AddBook;