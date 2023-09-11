import React from 'react';
import styled from 'styled-components';
import removeHtml from '../../utils/removeHtml';
import PodcastCard from '../Home/PodcastCard';

const EpisodeList = ({ podcast, user, setUser }) => {
  const StyledAudioPlayer = styled.audio`
    width: 300px;
    height: 30px;
    background-color: #616e8e;
    border: 3px;
    padding: 5px;
    margin: 10px;
    border-radius: 20px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  `;

const EpisodeBlock = styled.ul`
      font-family: Roboto,Arial,sans-serif;
    line-height: 1.25rem;
    font-size: .875rem;
    letter-spacing: .0142857143em;
    font-weight: 400;
    list-style: none;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-width: 500px;
    color: rgb(60,64,67);
    margin-top: 4px;
    white-space: pre-line;
    background-color: #333;
    margin-left: auto;
    margin-right: auto;
    border-radius:  12px;
    color: #fdc300;
    padding: 1rem;
    border: 1px solid #ddd;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1); 
    
`
const EpisodeDesc = styled.div`
    font-family: Roboto,Arial,sans-serif;
    line-height: 1.25rem;
    font-size: .875rem;
    letter-spacing: .0142857143em;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    max-height: 40px;
    color: rgb(60,64,67);
    margin-top: 4px;
    white-space: pre-line;
    color: white;
    /* margin: 5px; */
    align-items: left;
`
const Recent = styled.h3`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin: 1rem;
  text-align: center;
  font-weight: bold;
  font-family: 'Avenir Next', sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
const LineBreak = styled.hr`
  background-color: #ff2bff;
  height: 1px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 1rem;
`



  if (!podcast || !podcast.episodes) {
    return <div>No episodes available</div>;
  }

  return (
    <div>
      <PodcastCard podcast={podcast} user={user} setUser={setUser}/>
      <p>
      <Recent>Recent Episodes</Recent>
      <EpisodeBlock>
        {podcast.episodes.map((episode) => (
          <li key={episode.uuid}>
            <h4>{episode.name}</h4>
            <EpisodeDesc dangerouslySetInnerHTML={{ __html: removeHtml(episode.description) }} />
            <StyledAudioPlayer controls>
              <source src={episode.audioUrl} type="audio/mpeg" />
            </StyledAudioPlayer>
            <LineBreak />
          </li>
        ))}
      </EpisodeBlock>
      </p>
    </div>
  );
};

export default EpisodeList;
