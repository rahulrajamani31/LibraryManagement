import React, { useState, useEffect } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import Book from "./Book";
import "../Styles/SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `http://openlibrary.org/search.json?q=${searchTerm}&limit=6`
        );
        const books = response.data.docs.map((book) => ({
          title: book.title,
          author: book.author_name?.join(", "),
        }));
        setSuggestions(books);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `http://openlibrary.org/search.json?q=${searchTerm} `
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [searchTerm]);

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => (
    <div>
      <div>{suggestion.title}</div>
      <div className="author">{suggestion.author}</div>
    </div>
  );

  const onSuggestionsFetchRequested = ({ value }) => {
    setSearchTerm(value);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Search books....",
    value: searchTerm,
    onChange: (_, { newValue }) => setSearchTerm(newValue || ""),
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        setSearchTerm(e.target.value);
      }
    },
  };

  return (
    <div className="search-bar-container">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />

      <div className="book-grid">
        {books.map((book) => (
          <Book key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
