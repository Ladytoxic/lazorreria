import './Welcome.css';
import React, { useEffect, useState } from 'react';

const Welcome = ({ titulo }) => {
  const [propText, setPropText] = useState('e');

  useEffect(() => {
    let index = 0;

    const changePropText = () => {
      let texts = ['a', '@', 'x', 'o', 'e', '*'];
      if (index >= texts.length) {
        index = 0;
      }
      setPropText(texts[index]);
      index++;
    };

    const intervalId = setInterval(changePropText, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>
        Bienvenid{propText} a <br />
        {titulo}
      </h1>
    </>
  );
};

export default Welcome;
