import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import mockCategories from '../Library/mockCategories';

const SelectCategory = ({ handleChange }) => (
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
);

export default SelectCategory;

SelectCategory.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
