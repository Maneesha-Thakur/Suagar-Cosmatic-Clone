import React, { useState } from 'react';
import { Box, Image } from "@chakra-ui/react";

const MidTop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F83e3bb50-a5e1-4457-a629-ee95c3ab5894.jpg&w=1920&q=100',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe8bf1ee3-7c23-4f2b-93c0-74cd25538db2.jpg&w=1920&q=100',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F54e4efbd-24a0-40a2-ba69-840c291b84a9.gif&w=1920&q=100',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F44fdce37-9561-48df-9afd-1f4a215ac609.jpg&w=1920&q=100',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fca735643-49fd-4127-ba1b-95feb8b41edc.gif&w=1920&q=100'
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Box position="relative" width="100%" overflow="hidden">
      <Box display="flex" transition="transform 0.5s ease-in-out" transform={`translateX(-${currentImageIndex * 100}%)`}>
        {images.map((imageUrl, index) => (
          <Box key={index} width="100%" flex="none">
            <Image src={imageUrl} width="100%" height="auto" objectFit="cover" alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Box>
      <Box position="absolute" top="50%" transform="translateY(-50%)" left="10px" onClick={prevSlide} cursor="pointer">
        &lt;
      </Box>
      <Box position="absolute" top="50%" transform="translateY(-50%)" right="10px" onClick={nextSlide} cursor="pointer">
        &gt;
      </Box>
    </Box>
  );
};

export default MidTop;
