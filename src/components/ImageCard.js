import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ImageCard = ({ image, index, moveImage }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'image',
    item: { image, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'image',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
    ref={(node) => drag(drop(node))}
    style={{ opacity }}
    className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
  >
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-teal-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        {/* <ul>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul> */}
      </div>
      <div className="px-6 py-4">
        {image.tags.split(',').map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
