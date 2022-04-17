import React, { useEffect, useState } from 'react';

const ChangeColor = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  useEffect(() => {
    document.addEventListener('mousemove', handleChangeColor);

    return () => {
      document.removeEventListener('mousemove', handleChangeColor);
    };
  });

  const handleChangeColor= (e) => {
    const screenWidth = window.innerWidth / 2;

    if (coordinates.x > screenWidth) {
      setBackgroundColor('blue')
    } else {
      setBackgroundColor('red');

    }

    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <h1 style={{ backgroundColor: backgroundColor  }}>
        I'm now on X: {coordinates.x}, and Y: {coordinates.y}
      </h1>
    </>
  );
};

export default ChangeColor;