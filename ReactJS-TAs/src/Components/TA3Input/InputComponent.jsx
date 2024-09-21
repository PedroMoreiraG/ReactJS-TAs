// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Escribe algo..." 
      />
      <p>Lo que escribes: {inputValue}</p>
    </div>
  );
};

export default InputComponent;
