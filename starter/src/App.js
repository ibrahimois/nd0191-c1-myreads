import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./component/MainPage";
import Search from "./component/Search";
import * as BooksAPI from "./BooksAPI";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      console.log(res);
    };
    getBooks();
  }, []);

  const handleOpenSearch = () => {
    setShowSearchpage(!showSearchPage);
  };

  const handleCloseSearch = () => {
    setShowSearchpage(!showSearchPage);
  };

  const handleChangingShelf = (book, value) => {
    BooksAPI.update(book, value)
    const newState = books.map(obj => {
      console.log(obj.id, book.id)
      if (obj.id === book.id) {
        return { ...obj, shelf: value }
      }
      return obj
    })
    setBooks(newState)
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search handleCloseSearch={handleCloseSearch} />
      ) : (
        <MainPage
          books={books}
          handleOpenSearch={handleOpenSearch}
          handleChangingShelf={(book, value) => {
            handleChangingShelf(book, value);
          }}
        />
      )}
    </div>
  );
}

export default App;
