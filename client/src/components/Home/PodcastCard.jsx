import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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


const PodcastCard = ({ podcast, togglePodcast }) => {
  const { name, itunesInfo, _id } = podcast;

  const handleSubscribeClick = () => {
    togglePodcast(podcast);
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
        <button onClick={handleSubscribeClick}>
          {podcast.subscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </PodcastDetails>
    </PodcastCardContainer>
  );
};








// const PodcastCard = ({ podcast, togglePodcast}) => {
//   const { name, itunesInfo, _id } = podcast;

//   const handleSubscribeClick = () =>{
//     togglePodcast(podcast);
//   };


//   return (
//     <div className="podcast-card">
//       <Link to={_id} className="podcast-image-link">
//         {itunesInfo && itunesInfo.baseArtworkUrlOf && (
//           <img src={itunesInfo.baseArtworkUrlOf} alt={name} className="podcast-image" />
//         )}
//       </Link>
//       <div className="podcast-details">
//         <h3>{name}</h3>
//         <h5>{podcast.description}</h5>
//         <button onClick={handleSubscribeClick}>
//           {podcast.subscribed ? 'Unsubscribe' : 'Subscribe'}
//         </button>
//       </div>
//     </div>
//   );
// };
//redirect to the individual podcast page by clicking the card
export default PodcastCard;
