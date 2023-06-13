import React, { useRef, useState } from "react";
import Modal from "react-modal";
import "../Styles/Cart.css"; // Import the CSS file for styling

const Cart = ({ isOpen, onClose, book }) => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const getFieldValue = (field) => {
    if (Array.isArray(field)) {
      return field.length > 0 ? field.join(", ") : "NA";
    }
    return field || "NA";
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Book Details"
      className="book-details-modal"
      overlayClassName="book-details-overlay"
    >
      <div className="book-details-card">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="book-details-content">
          <div className="book-details-image">
            <img
              src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />
          </div>
          <div className="book-details-info">
            <h1>
              <b>{book.title}</b>
            </h1>
            <p>
              <b>Author: </b>
              {getFieldValue(book.author_name)}
            </p>

            <p>
              <b>First Publish Year: </b>
              {getFieldValue(book.first_publish_year)}
            </p>

            <div>
              <input type="date" onChange={handleChange} ref={dateInputRef} />
              <h1>
                <b>Borrow Till: </b>
                {date}
              </h1>
            </div>
            <br></br>
            <p>Do you want to borrow?</p>
            <button className="button">
              <b>Yes&emsp;</b>
            </button>
            <button className="button" onClick={onClose}>
              <b>Cancel</b>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
