import React, { useState, useEffect } from 'react';
import './DotRing.css';

const DotRing = () => {
  function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
      const mouseMoveHandler = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
      };
      document.addEventListener('mousemove', mouseMoveHandler);

      return () => {
        document.removeEventListener('mousemove', mouseMoveHandler);
      };
    }, []);

    return mousePosition;
  }

  const { x, y } = useMousePosition();
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring" />
      <div className="dot" style={{ left: `${x}px`, top: `${y}px` }} />
    </>
  );
};

export default DotRing;
