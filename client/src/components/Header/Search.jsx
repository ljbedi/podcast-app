import { useState } from "react";
import styled from 'styled-components';

const SearchBar = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #FDC300;
  color: #333;
  margin: 1rem 1rem;
  ::placeholder {
    color: white !important;
  }
`;
const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%; 
  left: 0;
  width: 420px;
  background-color: #F4C524;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #333;;
  z-index: 2;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  width: 388px;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #333;;

  }

  &:hover {
    background-color: #f0f0f0;
  }
`;


const Search = ({ user, setUser, podcasts }) => {
  const [filteredPodcast, setFilteredPodcast] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPodcast = podcasts.filter((podcast) => {
      return (
        findMatches(podcast, "name", searchValue) ||
        findMatches(podcast, "description", searchValue)
      );
    });
    setFilteredPodcast(filteredPodcast);

    setShowDropdown(filteredPodcast.length > 0 && searchValue.trim() !== "");
  };

  const findMatches = (podcast, key, value) => {
    return podcast[key].toLowerCase().includes(value.toLowerCase());
  };

  return (
    <div>
      <SearchBar
        type='text'
        placeholder="Search By Podcast Name"
        onChange={handleSearch}
      />
<DropdownContainer>
      {showDropdown && (
          <DropdownList>
            {filteredPodcast.map((podcast) => (
              <DropdownItem key={podcast.id}><a href={podcast._id}>{podcast.name}</a></DropdownItem>
            ))}
          </DropdownList>
      )}
      </DropdownContainer>
    </div>
  );
};

export default Search;
