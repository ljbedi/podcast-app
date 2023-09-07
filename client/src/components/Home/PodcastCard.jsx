import React from 'react';
import { Link } from 'react-router-dom';
// import SubscribeBtn from '../Buttons/SubscribeBtn';

const PodcastCard = ({ podcast }) => {
  const { name, itunesInfo, _id } = podcast;


  return (
    <Link to = {_id} className="podcast-card">
      <div className="podcast-image">
        {itunesInfo && itunesInfo.baseArtworkUrlOf && (
          <img src={itunesInfo.baseArtworkUrlOf} alt={name} />
          // seems like error is because the data structure
        )}
      </div>
      <div className="podcast-details">
        <h3>{name}</h3>
        <h5>{podcast.description}</h5>
          {/* add subscribe button here */}
          {/* <SubscribeBtn/> */}
      </div>
    </Link>
  );
};
//redirect to the individual podcast page by clicking the card
export default PodcastCard;
