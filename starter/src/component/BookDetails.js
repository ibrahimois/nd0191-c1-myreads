import { React } from "react";

function BookDetails({ book, handleChangingShelf }) {
  const handleChangeSelection = (e) => {
    handleChangingShelf(book, e.target.value);
  };
  return (
    <li key={book.id}>
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
            {book.shelf ? <select
              onChange={(e) => {
                handleChangeSelection(e);
              }}
              defaultValue={book.shelf ? book.shelf : "none"}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select> : <select
              onChange={(e) => {
                handleChangeSelection(e);
              }}
              defaultValue={book.shelf ? book.shelf : "add"}
            >
              <option value="add" disabled>
                Add to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>}

          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{
          book.authors.map((author, index) => {
            if (index === book.authors.length - 1) return author;
            return author + ", ";
          })
        }</div>
      </div>
    </li>
  );
}

export default BookDetails;
