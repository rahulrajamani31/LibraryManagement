import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Fiction from "./Cateogry/Fiction";
import History from "./Cateogry/History";
import Romance from "./Cateogry/Romance";
import Biography from "./Cateogry/Biography";
import Science from "./Cateogry/Science";
import Footer from "./Footer";
import Banner from "./Banner";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="text-center text-4xl font-bold py-10">Top Selling</h2>
      </div>
      <div>
        <Romance></Romance>
      </div>

      <div>
        <h2 className="text-center text-4xl font-bold py-10">Science</h2>
      </div>
      <div>
        <Science></Science>
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold py-10">Biography</h2>
      </div>
      <div>
        <Biography></Biography>
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold py-10">History</h2>
      </div>
      <div>
        <History></History>
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold py-10">Fiction</h2>
      </div>
      <div>
        <Fiction></Fiction>
      </div>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

// const slides = [
//   {
//     url: "https://www.goalexandria.com/wp-content/uploads/2019/01/Feb2019.png",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
//   },

//   {
//     url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
//   },
// ];

// const [currentIndex, setCurrentIndex] = useState(0);

// const prevSlide = () => {
//   const isFirstSlide = currentIndex === 0;
//   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//   setCurrentIndex(newIndex);
// };

// const nextSlide = () => {
//   const isLastSlide = currentIndex === slides.length - 1;
//   const newIndex = isLastSlide ? 0 : currentIndex + 1;
//   setCurrentIndex(newIndex);
// };

// const goToSlide = (slideIndex) => {
//   setCurrentIndex(slideIndex);
// };

// style={{ backgroundColor: "#FFBDFB" }}
// <div>
//   <div className="max-w-[1400px] h-[580px] w-full m-auto py-6 px-4 relative group">
//     <div
//       style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//       className="w-full h-full rounded-2xl bg-center bg-contain bg-repeat-space duration-500"
//     ></div>

//     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//       <BsChevronCompactLeft onClick={prevSlide} size={30} />
//     </div>

//     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//       <BsChevronCompactRight onClick={nextSlide} size={30} />
//     </div>
//     <div className="flex top-4 justify-center py-2">
//       {slides.map((slide, slideIndex) => (
//         <div
//           key={slideIndex}
//           onClick={() => goToSlide(slideIndex)}
//           className="text-2xl cursor-pointer"
//         >
//           <RxDotFilled />
//         </div>
//       ))}
//     </div>
//   </div>
{
  /* <LottieAnimation /> */
}
