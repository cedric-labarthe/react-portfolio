// Import style
import { useEffect, useRef } from 'react';
import './Intro.css';

// eslint-disable-next-line react/prop-types
const Intro = ({ setIntro }) => {
  const right = useRef();
  const left = useRef();
  useEffect(() => {
    const divRight = right.current;
    const divLeft = left.current;
    setTimeout(() => {
      divRight.style.transform = 'translateY(0)';
      divLeft.style.transform = 'translateY(0)';
      divRight.style.backgroundColor = 'black';
      divLeft.style.backgroundColor = 'black';
    }, 500);
    setTimeout(() => {
      divRight.style.transform = 'translateX(150%)';
      divLeft.style.transform = 'translateX(-150%)';
    }, 2000);
    setTimeout(() => {
      setIntro(false);
    }, 3000);
  }, []);

  return (
    <div className="intro-container">
      <h1 className="text">CLB</h1>
      <div ref={left} className="left" />
      <div ref={right} className="right" />
    </div>
  );
};

export default Intro;
