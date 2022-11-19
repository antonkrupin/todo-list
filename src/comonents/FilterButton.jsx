import React from 'react';

const FilterButton = (props) => {
  const {
    buttonName,
    clickHandle,
    aciveButton
  } = props;

  let className;

  if (buttonName === aciveButton) {
    className = "btn m-2 btn-primary";
  } else {
    className = "btn m-2 btn-outline";
  }

  return (
    <button
      onClick={clickHandle}
      type="button"
      className={className}  
    >
      {buttonName}
    </button>
  )
};

export default FilterButton;