import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Card from "./Card";

const CarasoulContainer = () => {
  const cardData = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrev(),
  });

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div className="image-carousel-container relative" {...handlers}>
      <div className="carousel-wrapper relative w-full">
        <Card data={cardData[currentIndex].id} />
      </div>
      <button
        className="carousel-button prev absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 text-white rounded focus:outline-none aspect-square h-[25px]"
        onClick={goToPrev}
      >
        <GrFormPreviousLink style={{ color: "black" }} />
      </button>
      <button
        className="carousel-button next absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2  text-white rounded focus:outline-none aspect-square h-[25px]"
        onClick={goToNext}
      >
        <GrFormNextLink style={{ color: "black" }} />
      </button>
    </div>
  );
};

export default CarasoulContainer;
