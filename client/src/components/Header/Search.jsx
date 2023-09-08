import { useState, useEffect } from "react";
import PodcastList from "../Home/PodcastList";
import styled from 'styled-components';

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Search = () => {
  const [podcastDetails, setPodcastDetails] = useState([]);
  const [filteredPodcast, setFilteredPodcast] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/podcasts/')
      .then((res) => res.json())
      .then((data) => {
        setPodcastDetails(data);
        setFilteredPodcast(data);
      });
  }, []);
  
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPodcast = podcastDetails.filter((podcast) => {
      return (
        findMatches(podcast, "name", searchValue) ||
        findMatches(podcast, "description", searchValue)
      );
    });
    setFilteredPodcast(filteredPodcast);
  };
  const findMatches = (podcast, key, value) => {
    return podcast[key].toLowerCase().includes(value.toLowerCase())
  }


  return (
    <div>
      <SearchBar
        type='text'
        placeholder="Search By Podcast Name"
        onChange={handleSearch}
      />
      {filteredPodcast && <PodcastList podcasts={filteredPodcast} />}
    </div>
  )
}
export default Search;