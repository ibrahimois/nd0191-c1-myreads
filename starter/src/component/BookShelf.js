import React from "react";
import BookDetails from "./BookDetails";
function BookShelf({ title, books, handleChangingShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => {
            return (
              <BookDetails
                book={book}
                key={index}
                handleChangingShelf={handleChangingShelf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}


export default BookShelf;
