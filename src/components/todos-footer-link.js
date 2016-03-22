import React from 'react';


export default ({onClickFilter, visibilityFilter, currentFilter, label}) => {
  return (
    <button type="button"
            className="btn btn-secondary"
            disabled={currentFilter === visibilityFilter ? 'disabled' : ''}
            onClick={() => onClickFilter(visibilityFilter)}>
      {label}
    </button>
  );
};
