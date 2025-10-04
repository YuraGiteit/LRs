import React from 'react';
import items from './data';

const Categories = ({ filterItems }) => {
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];

  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;