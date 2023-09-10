import React, { useState } from 'react';
import styled from 'styled-components';
import PodcastCard from './PodcastCard';

const PodcastListContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  transition: transform 0.3s ease;
`;

const CarouselButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 18px;
  margin-right: 16px;
`;

const PodcastList = ({ podcasts, user, setUser }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 300; 
  const cardsPerBatch = 3; 

  const scrollLeft = () => {
    const newPosition = scrollPosition - cardWidth * cardsPerBatch;
    setScrollPosition(Math.max(newPosition, 0));
  };

  const scrollRight = () => {
    const maxScroll = (Math.ceil(podcasts.length / cardsPerBatch) - 1) * cardWidth * cardsPerBatch;
    const newPosition = scrollPosition + cardWidth * cardsPerBatch;
    setScrollPosition(Math.min(newPosition, maxScroll));
  };

  return (
    <>
    <p> <h3> Check out these trending Podcasts!</h3> </p>
      <PodcastListContainer style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast._id} podcast={podcast} user={user} setUser={setUser} />
        ))}
      </PodcastListContainer>

      <div>
        <CarouselButton onClick={scrollLeft}>Previous</CarouselButton>
        <CarouselButton onClick={scrollRight}>Next</CarouselButton>
      </div>
    </>
  );
};

export default PodcastList;
