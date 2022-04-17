import React, { useEffect, useState } from 'react';

const ChangeColor = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  useEffect(() => {
    document.addEventListener('mousemove', handleChangeColor);

    return () => {
      document.removeEventListener('mousemove', handleChangeColor);
    };
  });

  const handleChangeColor= (e) => {
    const screenWidth = window.innerWidth / 2;

    if (coords.x > screenWidth) {
      setBackgroundColor('blue')
    } else {
      setBackgroundColor('red');

    }

    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <h1 style={{ backgroundColor: backgroundColor  }}>
        I'm now on X: {coords.x}, and Y: {coords.y}
      </h1>
    </>
  );
};

export default ChangeColor;