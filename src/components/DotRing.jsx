import React, { useState, useEffect, useContext } from 'react';
import './DotRing.css';
import { MouseContext } from '../context/mouse-context';

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

  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`ring ${cursorType}`}
      />
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
};

export default DotRing;
