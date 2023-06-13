import React from "react";
import Modal from "react-modal";
import "../Styles/BookDetailsPopup.css"; // Import the CSS file for styling

const BookDetailsPopup = ({ isOpen, onClose, book }) => {
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
      <div className="book-deta-card">
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
              <b>Subjects: </b>
              {getFieldValue(book.subject)}
            </p>
            <p>
              <b>First Publish Year: </b>
              {getFieldValue(book.first_publish_year)}
            </p>
            {/* <p>Publisher: {getFieldValue(book.publisher)}</p> */}
            <p>
              <b>Number of Pages: </b>
              {getFieldValue(book.number_of_pages)}
            </p>
            <q>
              <i>
                In your pursuit of success, the only thing which guarantees that
                you will succeed is the amount of knowledge you have. A greater
                amount of good knowledge is the most effective tool you have to
                equip yourself with, in order to achieve success. Let’s read
                books avidly and gain lots of good knowledge.
              </i>
            </q>
          </div>
        </div>
        {/* <div className="button-container">
          <button className="borrow-button">Borrow</button>
        </div> */}
      </div>
    </Modal>
  );
};

export default BookDetailsPopup;
