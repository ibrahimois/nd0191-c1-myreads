import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

function MainPage({ books, handleChangingShelf }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            handleChangingShelf={handleChangingShelf}
            books={books.filter((book) => book.shelf === "currentlyReading")}
          />
          <BookShelf
            title="Want to Read"
            handleChangingShelf={handleChangingShelf}
            books={books.filter((book) => book.shelf === "wantToRead")}
          />
          <BookShelf
            title="Read"
            handleChangingShelf={handleChangingShelf}
            books={books.filter((book) => book.shelf === "read")}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/Search">Add a book</Link>
      </div>
    </div>
  );
}

export default MainPage;
