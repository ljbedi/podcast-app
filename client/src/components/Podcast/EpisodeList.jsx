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

    margin-left: auto;
    margin-right: auto;
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
`
const Recent = styled.h3`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
const LineBreak = styled.hr`
  background-color: #01c3dc;
  height: 1px;
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
