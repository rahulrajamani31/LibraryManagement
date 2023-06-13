import React  from "react";
import initialBooks from "../../initialBooks.json";
import Book from "../Book";

const Romance = () => {
  let books = initialBooks.romance.slice(0, 4);

  return (
    <div className="book-grid">
      {books.map((book) => (
        <Book key={book.key} book={book} />
      ))}
    </div>
  );
};

export default Romance;