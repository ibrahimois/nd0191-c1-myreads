import React from "react";
import { Link } from "react-router-dom";
import BookDetails from "./BookDetails";

function Search({ handleCloseSearch, books, handleChangingShelf, handleSearching, searchTerm }) {

  const handleSearchingTerm = (e) => {
    handleSearching(e.target.value);
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={handleCloseSearch}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" onChange={(e) => { handleSearchingTerm(e) }} value={searchTerm} />
        </div>
      </div>
      <div className="search-books-results">
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

export default Search;
