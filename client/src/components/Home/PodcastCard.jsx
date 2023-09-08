import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import togglePodcast from '../SubscribedPodcast';
import User from '../User/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


// import SubscribeBtn from '../Buttons/SubscribeBtn';
  /*  styles for the podcastcard */
const PodcastCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const PodcastImageLink = styled(Link)`
  /* styles for the podcast image link */
  text-decoration: none;
  color: #333;
`;
const PodcastImage = styled.img`
  /* styles for the podcast image */
  max-width: 100;
  max-height: 150px;
`;
const PodcastDetails = styled.div`
  margin-top: 8px;
`;

const PodcastCard = ({podcast, user, setUser}) => {
  const { name, itunesInfo, _id } = podcast;
  const isSubscribed = user.subscribedPodcasts.some(id => podcast._id == id)
    const togglePodcast = () => {
      const updatedPodcasts =
      {

          "subscribedPodcasts": !isSubscribed ? [...user.subscribedPodcasts, podcast._id ] : user.subscribedPodcasts.filter(id => podcast._id !=id )
      }
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedPodcasts)
      }
      fetch (`http://localhost:9000/api/users/${user._id}`,requestOptions).then(res => res.json()).then (data => {
            console.log(data)
            setUser(data)
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
        <h5>{podcast.description}</h5>
        {/* <h4>{isSubscribed ? 'Subscribed' : 'Not Subscribed'}</h4> */}
        <button onClick={togglePodcast}/>
          <FontAwesomeIcon icon={faHeart} color={isSubscribed ? 'red' : 'gray'} />

        <h4>{isSubscribed}</h4>
        <button onClick={togglePodcast} >
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </PodcastDetails>
    </PodcastCardContainer>
  );
};

export default PodcastCard;