import { useState } from 'react';
import { motion } from 'framer-motion';
import bgD1 from '../assets/bg-d1.jpg';
import bgD2 from '../assets/bg-d2.webp';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the first card',
    image: bgD1,
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the second card',
    image: bgD1,
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is the third card',
    image: bgD1,
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'This is the fourth card',
    image: bgD1,
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'This is the fifth card',
    image: bgD1,
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'This is the sixth card',
    image: bgD1,
  },
  {
    id: 7,
    title: 'Card 7',
    description: 'This is the seventh card',
    image: bgD1,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotateValue, setRotateValue] = useState(0); // Rotation state

  // Handlers for navigating the carousel
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    rotateCardRight();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    rotateCardLeft();
  };

  // Rotate card temporarily when button is pressed
  const rotateCardLeft = (direction) => {
    setRotateValue(direction === 'prev' ? -15 : 15);

    // Reset rotation after 0.5 seconds
    setTimeout(() => {
      setRotateValue(0); // Reset rotation to 0
    }, 500); // Adjust this duration to match your desired animation time
  };

  const rotateCardRight = (direction) => {
    setRotateValue(direction === 'prev' ? 15 : -15);

    // Reset rotation after 0.5 seconds
    setTimeout(() => {
      setRotateValue(0); // Reset rotation to 0
    }, 500); // Adjust this duration to match your desired animation time
  };

  return (
    <div
      className="relative w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat z--10"
      style={{ backgroundImage: `url(${bgD2})` }} // Use backgroundImage here
    >
      <motion.div
        className="lg:flex flex-row sm:grid grid-flow-col grid-cols-2 space-x-6 overflow-hidden p-11"
        animate={{ x: -currentIndex * 350 }} // Adjust slide distance per card width
        transition={{ type: 'spring', stiffness: 200, damping: 60 }}
      >
        {cards.map((index, card) => (
          <motion.div
            key={card.id}
            className="w-80 h-96 rounded-lg border shadow-lg border-violet-400 bg-slate-400/10 bg-opacity-50 backdrop-filter backdrop-blur-lg flex flex-col items-center p-4 relative"
            animate={{ rotate: rotateValue, opacity: [0, 1] }} // Apply dynamic rotation
            transition={{ duration: 0.5, type: 'spring' }} // Rotation animation duration
            whileHover={{ scale: 1.2 }}
          >
            <motion.img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-md mb-4 border border-violet-400"
              initial={{ scale: 2 }}
              animate={{
                scale: 1,
                type: 'spring',
                stiffness: 200,
                damping: 60,
              }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
              whileHover={{ scale: 1.2 }} // Subtle hover effect on image
              whileTap={{ scale: 0.95 }}
            />
            <h3 className="text-xl text-gray-200 font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-gray-200 text-center">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-sky-300 px-3 py-1 rounded-full hover:bg-cyan-600 transition duration-300 ease-in-out"
      >
        Prev
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-sky-300 px-3 py-1 rounded-full hover:bg-cyan-600 transition duration-300 ease-in-out "
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
