import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import User from '../User/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const PodcastCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px; 
  padding: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1); /* Increased box shadow */
  position: relative; 
`;

const PodcastImageLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
`;

const PodcastImage = styled.img`
  max-width: 100;
  max-height: 150px;
`;

const PodcastDetails = styled.div`
  margin-top: 8px;
`;

const HeartIcon = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 24px;
  color: ${(props) => (props.isSubscribed ? 'red' : 'gray')};
  cursor: pointer;
`;

const PodcastCard = ({ podcast, user, setUser }) => {
  const { name, itunesInfo, _id } = podcast;
  const isSubscribed = user.subscribedPodcasts.some((id) => podcast._id === id);

  const togglePodcast = () => {
    const updatedPodcasts = {
      subscribedPodcasts: isSubscribed
        ? user.subscribedPodcasts.filter((id) => podcast._id !== id)
        : [...user.subscribedPodcasts, podcast._id],
    };

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPodcasts),
    };

    fetch(`http://localhost:9000/api/users/${user._id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

  return (
    <PodcastCardContainer>
      <PodcastImageLink to={_id}>
        {itunesInfo && itunesInfo.baseArtworkUrlOf && (
          <PodcastImage src={itunesInfo.baseArtworkUrlOf} alt={name} />
        )}
      </PodcastImageLink>
      <PodcastDetails>
        <h3>{name}</h3>
      </PodcastDetails>
      <HeartIcon
        icon={faHeart}
        isSubscribed={isSubscribed}
        onClick={togglePodcast}
      />
    </PodcastCardContainer>
  );
};

export default PodcastCard;
