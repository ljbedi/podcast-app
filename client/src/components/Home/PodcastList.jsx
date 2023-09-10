import React, { useState } from 'react';
import styled from 'styled-components';
import PodcastCard from './PodcastCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PodcastListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 16px;
  padding: 16px;
  /* overflow: scroll;  */
  justify-content: center
`;

const PodcastCardWrapper = styled.div`
  /* flex: 0 0 calc(20% - 16px); */
`;

const CarouselButton = styled.button`
  background-color: #FDC300;
  color: #ff2bff;
  border: 1px solid #ddd;
  padding: 16px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  position: relative; 
`;

const CenteredHeading = styled.h3`
  text-align: center;
  font-weight: bold;
  font-family: 'Avenir Next', sans-serif; 
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const PodcastList = ({ podcasts, user, setUser }) => {
  const [batchIndex, setBatchIndex] = useState(0); 
  const cardsPerBatch = 4;

  const startIndex = batchIndex * cardsPerBatch;
  const endIndex = startIndex + cardsPerBatch;
  const batchPodcasts = podcasts.slice(startIndex, endIndex);

  const scrollLeft = () => {
    if (batchIndex > 0) {
      setBatchIndex(batchIndex - 1);
    }
  };

  const scrollRight = () => {
    if (endIndex < podcasts.length) {
      setBatchIndex(batchIndex + 1);
    }
  };

  return (
    <>
      <CenteredHeading>Check out these trending Podcasts!</CenteredHeading>
      <PodcastListContainer>
        <CarouselButton onClick={scrollLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </CarouselButton>
        {batchPodcasts.map((podcast) => (
          <PodcastCardWrapper key={podcast._id}>
            <PodcastCard podcast={podcast} user={user} setUser={setUser} />
          </PodcastCardWrapper>
        ))}
        <CarouselButton onClick={scrollRight}>
          <FontAwesomeIcon icon={faArrowRight} />
        </CarouselButton>
      </PodcastListContainer>
    </>
  );
};



export default PodcastList;
