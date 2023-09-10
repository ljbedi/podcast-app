import React, { useEffect, useState } from "react";
import PodcastList from "../components/Home/PodcastList";
import SubscribedPodcast from "../components/SubscribedPodcast";
import Search from "../components/Header/Search";

const Home = () => {
  const [user, setUser] = useState(null);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = () => {
    fetch("http://localhost:9000/api/podcasts")
      .then((res) => res.json())
      .then((data) => setPodcasts(data))
      .catch((error) => {
        console.error("Error fetching podcasts:", error);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch(`http://localhost:9000/api/users`)
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  };

  if (!user) return "Loading";

  return (
    <>
      <Search user={user} setUser={setUser} podcasts={podcasts} />
      <SubscribedPodcast user={user} setUser={setUser} podcasts={podcasts} />
      <PodcastList podcasts={podcasts} user={user} setUser={setUser} />
    </>
  );
};

export default Home;
