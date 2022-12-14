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

  const handleChangingShelf = (value) => {
    console.log(value);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search handleCloseSearch={handleCloseSearch} />
      ) : (
        <MainPage
          books={books}
          handleOpenSearch={handleOpenSearch}
          handleChangingShelf={(value) => {
            handleChangingShelf(value);
          }}
        />
      )}
    </div>
  );
}

export default App;
