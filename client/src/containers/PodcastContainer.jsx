import {useState, useEffect} from 'react'
import Podcast from "../components/Podcast"
import PodcastList from "../components/PodcastList"



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


  return (
    <>
  <p>Podcasts App</p>
  </>
);
};

export default PodcastContainer;


