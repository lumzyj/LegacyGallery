import React, { useState, useEffect } from 'react';
import gallery from '../img/collection.jpg';
import cameraIcon from '../img/cam.png'; // Import your camera icon image
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    // Show the camera icon every 5 seconds
    const cameraTimer = setInterval(() => {
      setShowCamera(true);

      // Hide the camera icon after 2 seconds
      setTimeout(() => {
        setShowCamera(false);
      }, 2000);
    }, 5000);

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(cameraTimer);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat bg-opacity-70"
      style={{ backgroundImage: `url(${gallery})` }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold text-white mb-6 z-10"
      >
        Welcome to Legacy Gallery
      </motion.h1>

      <Link to="/login">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition-transform z-10"
        >
          Get Started
        </motion.button>
      </Link>

      {showCamera && (
        <motion.img
          src={cameraIcon}
          alt="Camera"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute top-4 right-4 w-35 h-20"
        />
      )}
    </div>
  );
};

export default Home;






