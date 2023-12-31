// pages/names.js
import React, { useState } from 'react';

const Names = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nameList = ['John', 'Jane', 'Bob', 'Alice', 'Charlie'];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nameList.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? nameList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h1>{nameList[currentIndex]}</h1>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Names;
