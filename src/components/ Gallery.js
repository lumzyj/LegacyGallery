import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ImageCard from './ImageCard.js';
import ImageSearch from './ImageSearch.js';
import { Waveform } from '@uiball/loaders';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase auth methods and auth instance

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(); // Get Firebase auth instance

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    const newImages = [...images];
  
    // Move the dragged image to the new position
    newImages.splice(dragIndex, 1);
    newImages.splice(hoverIndex, 0, draggedImage);
  
    setImages(newImages);
  };

  const handleLogout = () => {
    // Sign out the user using Firebase Authentication
    signOut(auth)
      .then(() => {
        // Redirect to the login page after successful logout
        navigate('/');
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4">
        <div className="flex justify-end">
          <button onClick={handleLogout} className="bg-teal-200 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>

        <ImageSearch searchText={(text) => setTerm(text)} />

        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Waveform size={40} lineWeight={3.5} speed={1} color="teal" />
          </div>
        ) : images.length === 0 ? (
          <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <ImageCard key={image.id} image={image} index={index} moveImage={moveImage} />
            ))}
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default Gallery;


