import React from "react";

function BookDetails({ book, handleChangingShelf }) {
  const handleChangeSelection = (e) => {
    const value = e.target.value;
    handleChangingShelf(value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => {
                handleChangeSelection(e);
              }}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
      </div>
    </li>
  );
}

export default BookDetails;
