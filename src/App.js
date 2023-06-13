import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Books from "./pages/BookList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllBooks from "./pages/AllBooks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInSignupWithLocalStorage from "./pages/SignInSignUp";
import MyAccount from "./pages/MyAccount";
import FCart from "./pages/FCart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const localSignUp = localStorage.getItem("signUp");
    setIsAuthenticated(!!localSignUp);
  }, []);

  return (
    <Router>
      <div>
        {isAuthenticated && <Navbar />} {}
        <div className="container">
          <Routes>
            {!isAuthenticated ? (
              <Route path="/" element={<SignInSignupWithLocalStorage />} />
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/allbooks" element={<AllBooks />} />
                <Route path="/about" element={<About />} />
                <Route path="/queries" element={<Contact />} />
                <Route path="/myaccount" element={<MyAccount />} />
                <Route path="/cart" element={<FCart />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// import Navbar from "./Navbar";
// import Books from "./pages/BookList";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AllBooks from "./pages/AllBooks";
// import SignInSignupWithLocalStorage from "./pages/SignInSignUp";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/auth" element={<SignInSignupWithLocalStorage />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/books" element={<Books />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/allbooks" element={<AllBooks />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Home from "./pages/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignInSignupWithLocalStorage from "./pages/SignInSignUp";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const localSignUp = localStorage.getItem("signUp");
//     setIsAuthenticated(!!localSignUp);
//   }, []);

//   return (
//     <Router>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           {!isAuthenticated ? (
//             <Route path="/" element={<SignInSignupWithLocalStorage />} />
//           ) : (
//             <>
//               <Route path="/" element={<Home />} />
//               {/* Add other routes here */}
//             </>
//           )}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
