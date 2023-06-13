import React from "react";
import initialBooks from "../initialBooks.json";
import Book from "./Book";
import SearchBar from "./SearchBar";
const AllBooks = () => {
  let books = initialBooks.all.slice(0, 100);

  return (
    <div>
      <SearchBar></SearchBar>
      <div className="book-grid">
        {books.map((book) => (
          <Book key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
