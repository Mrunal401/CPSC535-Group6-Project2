import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import backgroundImage from '../../image/background_img.jpeg';

const Home = () => {
  const textLine = ['Explore. Navigate. Thrive.'];
  /*
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const lineChangeDelay = 1000; // Delay between lines


  useEffect(() => {
    // Display the text directly without animation
    setCurrentText(textLines[currentLineIndex]);

    // Set a timeout to change the line after a delay
    const timeoutId = setTimeout(() => {
      setCurrentText('');
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % textLines.length);
    }, lineChangeDelay);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, [currentLineIndex]);


*/
  /*
  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const typeText = () => {
      intervalId = setInterval(() => {
        if (currentIndex <= textLines[currentLineIndex].length) {
          setCurrentText(textLines[currentLineIndex].slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentText('');
            currentIndex = 0;
            setCurrentLineIndex((prevIndex) => (prevIndex + 1) % textLines.length);
            typeText(); // Restart the typing animation
          }, lineChangeDelay);
        }
      }, typingSpeed);
    };

    typeText();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [currentLineIndex]);
*/
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backdropFilter: 'blur(50px)', // Adjust the blur amount as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85vh',
    color: 'white', // Adjust the text color based on the background image
  };
  
  const textStyle = {
    fontSize: '90px',
    fontWeight: 'bold',
    
    textAlign: 'left',
    color: '#4CAF50', // Change the color to something more attractive
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
  };

  const headlineStyle = {
    fontSize: '25px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  };
  
  

  return (
    <div style={backgroundStyle}>
      <div style={textStyle}>
        {textLine}
      </div>
    </div>
  );
};

export default Home;