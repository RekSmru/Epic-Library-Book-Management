# Epic Library 📚

Epic Library is a simple React-based web application that allows users to browse books by genre, view popular books, search books by title or author, and add new books. The project demonstrates React routing, component structure, and responsive UI design.

## Features

* **Home Page**

  * Welcome message
  * Browse books by **Genre**
  * View **Popular Books** with ratings
  

* **Browse Books Page**

  * Search books by **Title or Author**
  * Filter books by **Genre**
  

* **Book Details Page**

  * Shows full details of a selected book

* **Add Book Page**

  * Allows users to add new books with:

    * Title
    * Author
    * Genre

* **404 Page**

  * Displays a **Page Not Found** message
  * Shows the invalid route URL
  * Includes a link back to the **Home page**

## Technologies Used

* React
* React Router
* JavaScript (ES6)
* CSS
* Vite

## Project Structure

```
src
│
├── components
│   ├── Header.jsx
│   ├── BookCard.jsx
│   └── Layout.jsx
│
├── pages
│   ├── Home.jsx
│   ├── BrowseBooks.jsx
│   ├── BookDetails.jsx
│   ├── AddBook.jsx
│   └── NotFound.jsx
│
├── data
│   └── booksData.js
│
├── img
│   └── genre images
│
├── App.jsx
└── main.jsx
```

## Installation

1. Clone the repository

```
git clone https://github.com/RekSmru/Epic-Library-Book-Management.git
```

2. Navigate to the project folder

```
cd Epic-Library-Book-Management

```

3. Install dependencies

```
npm install
npm install react-router-dom

```

4. Run the development server

```
npm run dev
```

5. Open in browser

```
http://localhost:5173
```

## Screens Included

* Home Page
* Browse Books Page
* Book Details Page
* Add Book Page
* 404 Page Not Found


