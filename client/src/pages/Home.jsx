import { useEffect, useState } from "react";
import PodcastCard from "../components/Home/PodcastCard";
import PodcastList from "../components/Home/PodcastList";
import SubscribedPodcast from "../components/SubscribedPodcast";
import User from "../components/User/User";
// import SubscribedPodcast from "../components/SubscribedPodcast";


const Home = () => {
    const [user,setUser]= useState (null)
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
      fetchPodcasts();
    }, []);
  
    const fetchPodcasts = () => {
      fetch('http://localhost:9000/api/podcasts')
        .then((res) => res.json())
        .then((data) => setPodcasts(data))
        .catch((error) => {
          console.error('Error fetching podcasts:', error);
        });
    };

useEffect (() => {
    fetchUser ()
},[]);

    // Fetch current user and pass user as a prop to SubscribedPodcast
    const fetchUser = () => {
        fetch (`http://localhost:9000/api/users`)
        .then ((res)=> res.json ())
        .then ((data) => setUser (data[0]))
    }
    console.log (user)

    if (!user) 
    return ("Loading")

    return (
        <>
            <SubscribedPodcast user={user} setUser={setUser} podcasts={podcasts} />
            <PodcastList podcasts ={podcasts}/>
            <User/>

            {/* <SubscribedPodcast/> */}

        </>
    )
}

export default Home;