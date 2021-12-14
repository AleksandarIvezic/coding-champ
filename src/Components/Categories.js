import React, { useState } from 'react';
import Category from './Category';
import mockCategories from '../Library/mockCategories';
import '../Styles/Categories.css';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    selected: false,
  });

  const handleSelect = (e) => {
    setSelectedCategory({
      selected: true,
      category: mockCategories.find((cat) => cat.id === Number(e.currentTarget.id)),
    });
  };

  return (
    <>
      <ul className="categories">
        {mockCategories.map((category) => (
          <li key={category.id}>
            <Category
              logo={category.logo}
              name={category.name}
              handleSelect={handleSelect}
              id={category.id}
            />
          </li>
        ))}
      </ul>

      <div className="description">
        {selectedCategory.selected && selectedCategory.category
        && <h3>{selectedCategory.category.description}</h3>}
      </div>
    </>
  );
};

export default Categories;
