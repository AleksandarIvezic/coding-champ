import React, { useState } from 'react';
import SelectCategory from './SelectCategory';
import mockCategories from '../Library/mockCategories';
import '../Styles/Play.css';

const Play = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  console.log(selectedCategory);

  return (
    <>
      <div className="select-category">
        <h3>Choose your tech</h3>
        <SelectCategory handleChange={handleChange} />
        {selectedCategory
      && (
      <h3>
        {mockCategories.find((category) => category.name === selectedCategory).description}
      </h3>
      )}
      </div>
      <div className="difficulty-level d-flex">
        <button type="button" className="category flex-centered"><span>easy</span></button>
        <button type="button" className="category flex-centered"><span>medium</span></button>
        <button type="button" className="category flex-centered"><span>hard</span></button>
      </div>
      <div>
        <button className="play-button" type="button">Start the quiz</button>
      </div>
    </>
  );
};

export default Play;
