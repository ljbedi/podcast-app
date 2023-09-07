import React from 'react';

const SubscribedPodcast = ({podcasts, user, setUser}) => {

    const togglePodcast = (podcasts) => {

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
            <button onClick={() => togglePodcast (podcast)}> </button>
          </li>
        ))}
      </ul>
      {user.subscribedPodcasts.length === 0 && <p>No subscriptions yet!</p>}
    </div>
  );
};

export default SubscribedPodcast;