import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import mockCategories from '../Library/mockCategories';
import mockScores from '../Library/mockScores';
import '../Styles/Leaderboard.css';

const Leaderboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="submit-category">
          Choose a category
          <select id="categories" name="categories" defaultValue="" onChange={handleChange}>
            <option value="" disabled> </option>
            {mockCategories.map((category) => (
              <option key={`category-${uuidv4()}`} value={category.name}>{category.name}</option>
            ))}
          </select>
        </label>
      </form>
      {selectedCategory
      && <h3>{selectedCategory}</h3>}
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#R</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody id="leaderboard-data">
          {selectedCategory.length > 0
          && mockScores[selectedCategory].map((score, index) => (
            <tr key={`${selectedCategory}-${uuidv4()}`}>
              <td>{index + 1}</td>
              <td>{Object.keys(score)[0]}</td>
              <td>{score[Object.keys(score)[0]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Leaderboard;
