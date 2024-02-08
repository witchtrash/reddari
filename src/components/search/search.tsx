import React, { ChangeEvent, useRef, useState } from 'react';

import { useSearchBox } from 'react-instantsearch-core';

export const Search = () => {
  const { refine, query } = useSearchBox();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);

    refine(value);
  };

  return (
    <input
      ref={inputRef}
      type="search"
      placeholder="Search"
      onChange={handleOnChange}
      value={inputValue}
    />
  );
};
