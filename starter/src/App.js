import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./component/MainPage";
import Search from "./component/Search";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [searchedBooks, setSearchedBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const handleCloseSearch = async () => {
    const updatedBooks = await BooksAPI.getAll();
    setBooks(updatedBooks)
    setSearchTerm("")
    setSearchedBooks([])
  };

  const handleChangingShelf = (book, value) => {
    BooksAPI.update(book, value)
    const newState = books.map(obj => {
      if (obj.id === book.id) {
        return { ...obj, shelf: value }
      }
      return obj
    })
    setBooks(newState)
  };

  const handleSearching = async (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const res = await BooksAPI.search(searchTerm);
      const migratedBooks = res.map((book) => {
        let foundBook = books.find(tempBook => tempBook.id === book.id)
        if (foundBook) {
          return foundBook;
        } else {
          return book
        }
      })
      setSearchedBooks(migratedBooks)
    } else {
      setSearchedBooks([])
    }
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <MainPage
          books={books}
          handleChangingShelf={(book, value) => {
            handleChangingShelf(book, value);
          }} />}
      />
      <Route path="/Search" element={
        <Search
          handleCloseSearch={handleCloseSearch}
          books={searchedBooks}
          handleChangingShelf={(book, value) => {
            handleChangingShelf(book, value);
          }}
          handleSearching={(searchTerm) => {
            handleSearching(searchTerm)
          }}
          searchTerm={searchTerm} />
      }
      />

    </Routes>
  );
}

export default App;
