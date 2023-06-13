import React, { useState, useContext } from "react";
import "../Styles/Book.css"; // Import the CSS file for styling
import BookDetailsPopup from "./BookDetailsPopup";
import Cart from "./Cart";

const Book = ({ book }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showcart, setcart] = useState(false);
  return (
    <div className="book-card">
      <div className="book-info">
        <img
          src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="book-image"
        />
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author_name?.join(", ")}</p>
        <button className="button" onClick={() => setShowDetails(true)}>
          <b>Show Details&emsp;</b>
        </button>
        <button className="button" onClick={() => setcart(true)}>
          <b>Borrow</b>
        </button>
      </div>
      <Cart isOpen={showcart} onClose={() => setcart(false)} book={book} />
      <BookDetailsPopup
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        book={book}
      />
    </div>
  );
};

export default Book;
