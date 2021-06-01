import PropTypes from 'prop-types';

import React, { createContext, useState } from 'react';

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => {},
});

const MouseContextProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('');

  const cursorChangeHandler = (cursor) => {
    setCursorType(cursor);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType,
        cursorChangeHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

MouseContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MouseContextProvider;
