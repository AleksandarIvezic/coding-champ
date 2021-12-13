import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Category.css';

const Category = ({
  logo, name, handleSelect, id,
}) => (
  <>
    <button className="category" type="button" onClick={handleSelect} id={id}>
      <span>{logo}</span>
      <span>{name}</span>
    </button>
  </>
);

export default Category;

Category.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
