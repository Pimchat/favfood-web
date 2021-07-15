import React from "react";
import "./slideshow.css";
import { useState, useEffect, useRef } from "react";

//image
import dish1 from "./restaurant-pic/dish2.jpg";
import dish2 from "./restaurant-pic/dish1.jpg";
import dish3 from "./restaurant-pic/dish32.jpg";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500; //2.5 seconds
const photos = [{ photo: dish1 }, { photo: dish2 }, { photo: dish3 }];

function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {photos.map((image, index) => (
          <img key={index} alt="home" src={image.photo} className="slide" />
        ))}
      </div>
      <div className="slideshowDots">
        {photos.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;

//<img src={dish1} alt="home" width="500" />

// {photos.map((photo, index) => (
//   <img src={photo}
//   key={index}
//   className="slide"
//   alt="home" width="100%" />
// ))}

// {colors.map((backgroundColor, index) => (

//   <div
//     className="slide"
//     key={index}
//     style={{ background: backgroundColor }}
//   ></div>
// ))}
