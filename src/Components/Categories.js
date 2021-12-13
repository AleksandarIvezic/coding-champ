import React, { useState } from 'react';
import Category from './Category';
import '../Styles/Categories.css';

const Categories = () => {
  const hardcodedCategories = [
    {
      id: 1,
      logo: 'html-logo',
      name: 'HTML',
      description: 'The skeleton of every web page. Check how many bones you can break.',
    },
    {
      id: 2,
      logo: 'css-logo',
      name: 'CSS',
      description: 'You said you are good with colors. Let me see how are you good at styling.',
    },
    {
      id: 3,
      logo: 'JavaScript-logo',
      name: 'JavaScript',
      description: 'You like to build strong applications. Let me see how good trainer you really are.',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState({
    selected: true,
    category: hardcodedCategories[0],
  });

  const handleSelect = (e) => {
    setSelectedCategory({
      selected: true,
      category: hardcodedCategories.find((cat) => cat.id === Number(e.currentTarget.id)),
    });
  };

  return (
    <>
      <ul className="categories">
        {hardcodedCategories.map((category) => (
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
