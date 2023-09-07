// import React from 'react';

// const SubscribedPodcast = ({ subscribedPodcasts, unsubscribePodcast }) => {
//   return (
//     <div>
//       <h2>Subscribed Podcasts</h2>
//       <ul>
//         {subscribedPodcasts.map((podcast) => (
//           <li key={podcast.id}>
//             {podcast.name}{' '}
//             <button onClick={() => unsubscribePodcast(podcast)}>Unsubscribe</button>
//           </li>
//         ))}
//       </ul>
//       {subscribedPodcasts.length === 0 && <p>No subscriptions yet!</p>}
//     </div>
//   );
// };

// export default SubscribedPodcast;