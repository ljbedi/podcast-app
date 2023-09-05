import {useState, useEffect} from 'react'
import Podcast from "../components/Podcast"
import PodcastList from "../components/PodcastList"
// import PodcastService from "../components/PodcastService"
import {getPodcasts} from "../components/PodcastService"


const PodcastContainer = () => {
  const [podcasts, setPodcasts] = useState ([]);
  const [subscribedPodcasts, setSubscribedPodcasts] = useState([]);

  // useEffect(() => {
  //   fetch('https://mongodb://localhost:27017')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPodcasts(data);
  //     });
  // }, []);

  useEffect(() => {
    fetchPodcasts()
  }, [])

  const fetchPodcasts = () => {
    fetch("http://localhost:9000/api/podcasts")
    .then((res) => res.json())
    .then((data) => setPodcasts(data));


  }


  return (
  <>
  <h2>Podcasts</h2>
    {podcasts.map((podcast, index) => (
      <li>
        <ul>
        {podcast.name}
        {podcast.description}
        </ul>
      </li>))}
  </>
  )}
export default PodcastContainer;