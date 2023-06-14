import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/BookList.css"; // Import the CSS file for styling
import initialBooksData from "../initialBooks.json";
import Book from "./Book";
import SearchBar from "./SearchBar";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("science"); // Default category
  const [publishedYear, setPublishedYear] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const queryParams = {
          q: searchTerm,
          subject: filterTerm,
          published_year: publishedYear,
          author_name: authorName,
        };
        const response = await axios.get("http://openlibrary.org/search.json", {
          params: queryParams,
        });
        setBooks(response.data.docs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchBooks();
  }, [searchTerm, filterTerm, publishedYear, authorName]);

  useEffect(() => {
    const initializeBooks = () => {
      if (selectedCategory && initialBooksData[selectedCategory]) {
        setBooks(initialBooksData[selectedCategory]);
      } else {
        setBooks([]);
      }
    };

    initializeBooks();
  }, [selectedCategory]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterTerm(e.target.value);
    setBooks([]);
  };

  const handlePublishedYearChange = (e) => {
    setPublishedYear(e.target.value);
  };

  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  return (
    <div>
      {/* <SearchBar></SearchBar> */}
      {/* <div className="search-container"> */}
      {/* <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={handleSearch}
        /> */}
      {/* </div> */}
      <br></br>
      <p>Filter the books by Category</p>
      <div className="filter-container">
        <select className="filter-select" onChange={handleFilter}>
          <option value="all">All</option>
          <option value="fiction">Fiction</option>
          <option value="history">History</option>
          <option value="science">Science</option>
          <option value="romance">Romance</option>
          <option value="biography">Biography</option>
        </select>
        <input
          type="text"
          placeholder="Published Year"
          className="filter-input"
          onChange={handlePublishedYearChange}
        />
        <input
          type="text"
          placeholder="Author Name"
          className="filter-input"
          onChange={handleAuthorNameChange}
        />
      </div>

      {loading ? (
        <div>
          <div className="loading-spinner"></div>
          <p>Please wait....</p>
        </div>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <Book key={book.key} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;

// import React, { useState, useEffect } from "react";
// import BookCard from "./Book";

// const BookSearchPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   const handleSearch = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `http://openlibrary.org/search.json?q=${searchQuery}&page=${page}`
//       );
//       const data = await response.json();
//       const bookResults = data.docs;
//       setBooks((prevBooks) => [...prevBooks, ...bookResults]);
//     } catch (error) {
//       console.error("Error fetching book data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   useEffect(() => {
//     // Function to fetch initial book data
//     const fetchInitialBooks = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `http://openlibrary.org/search.json?limit=100`
//         );
//         const data = await response.json();
//         const bookResults = data.docs;
//         setBooks(bookResults);
//       } catch (error) {
//         console.error("Error fetching initial book data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInitialBooks();
//   }, []);

//   useEffect(() => {
//     if (searchQuery) {
//       setBooks([]);
//       setPage(1);
//       handleSearch();
//     }
//   }, [searchQuery]);

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search Books..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <div>
//         {/* Render the books */}
//         {books.map((book) => (
//           <BookCard key={book.key} book={book} />
//         ))}
//       </div>

//       {/* Render the "Load More" button */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <button onClick={handleLoadMore}>Load More</button>
//       )}
//     </div>
//   );
// };

// export default BookSearchPage;
