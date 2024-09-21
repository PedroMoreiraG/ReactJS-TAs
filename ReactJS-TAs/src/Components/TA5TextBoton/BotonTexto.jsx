// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ToggleText = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        {showText ? 'Ocultar texto' : 'Mostrar texto'}
      </button>
      {showText && <p>Este es el texto que aparece y desaparece</p>}
    </div>
  );
};

export default ToggleText;
