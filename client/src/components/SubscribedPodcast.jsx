import React from 'react';

const SubscribedPodcast = ({podcasts, user, setUser}) => {

    const togglePodcast = (podcast) => {

        const updatedPodcasts = 
        {    
            "subscribedPodcasts": [...user.subscribedPodcasts, podcast._id ]
        }
    

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedPodcasts)

        }

        fetch (`http://localhost:9000/api/users/${user._id}`,requestOptions).then(res => res.json()).then (data => {
            console.log(data)
            setUser(data)
        });

    }
console.log(podcasts)
console.log(user.subscribedPodcasts)
  return (

    <div>
      <h2>Subscribed Podcasts</h2>
      <ul>
      {podcasts.filter(podcast => user.subscribedPodcasts.some(id => podcast._id == id)).map((podcast) => (
          <li key={podcast.id}>
            {podcast.name}{' '}
            <button onClick={() => togglePodcast (podcast)}> Unsubscribe</button>
          </li>
        ))}
      </ul>
      {user.subscribedPodcasts.length === 0 && <p>No subscriptions yet!</p>}
    </div>
  );
};

export default SubscribedPodcast;