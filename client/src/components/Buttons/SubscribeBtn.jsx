// import React, { useState, useEffect } from 'react';



// const subscribedPodcast= (podcast) => {

  

//   // const unsubscribePodcast = (podcast) => {
//   //   const updatedSubscribedList = subscribedPodcast.filter((p) => p._id !== podcast._id);
//   //   setSubscribedPodcasts(updatedSubscribedList);
//   // };



// const SubscribedPodcast = ({ subscribedPodcast }) => {
//     return (
//       <div>
//         <h2>Subscribed Podcasts</h2>
//         <ul>
//           {subscribedPodcasts.map((podcast) => (
//             <li key={podcast.id}>
//               {podcast.name}{' '}
//               <button onClick={() => unubscribePodcast(podcast)}>Unsubscribe</button>
//             </li>
//           ))}
//         </ul>
//         {subscribedPodcasts.length === 0 && <p>No subscriptions yet!</p>}
//       </div>
//     );
//   };

//   export default SubscribedPodcast;