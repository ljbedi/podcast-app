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
    margin: 20px;
    border-radius: 20px;
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
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`
const EpisodeDesc = styled.div`
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 500px;
  max-height: 100px;
`
const Recent = styled.h3`
  margin-left: auto;
  margin-right: auto;
`

  if (!podcast || !podcast.episodes) {
    return <div>No episodes available</div>;
  }

  return (
    <div>
      <PodcastCard podcast={podcast} user={user} setUser={setUser}/>
      <Recent>Recent Episodes</Recent>
      <EpisodeBlock>
        {podcast.episodes.map((episode) => (
          <li key={episode.uuid}>
            <h4>{episode.name}</h4>
            <EpisodeDesc dangerouslySetInnerHTML={{ __html: removeHtml(episode.description) }} />
            <StyledAudioPlayer controls>
              <source src={episode.audioUrl} type="audio/mpeg" />
            </StyledAudioPlayer>
            <hr />
          </li>
        ))}
      </EpisodeBlock>
    </div>
  );
};

export default EpisodeList;
