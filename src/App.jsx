
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import Layout from "./components/Layout";


function App() {
  

  return (
    <>
       <BrowserRouter>
<Layout />
      <Header />

      <Routes>

       <Route path="/" element={<Home />} />

        <Route path="/books/:category" element={<BrowseBooks />} />

       <Route path="/books" element={<BrowseBooks />} />

        <Route path="/book/:id" element={<BookDetails />} />

        <Route path="/add-book" element={<AddBook />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
