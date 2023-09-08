// import React from 'react';
// // import removeHtml from '../utils/removeHtml';

// const EpisodeList = ({ podcast }) => {
//   console.log(podcast.episodes)
//   return (
//     <div>
//       <h3>Episode List</h3>
//       <ul>
//         {podcast.episodes.map((episode) => (
//           <li key={episode.uuid}>
//             <h4>{episode.name}</h4>
//             <audio controls><source src={episode.audioUrl} type="audio/mpeg"/></audio>
//             <div dangerouslySetInnerHTML={{__html: removeHtml(episode.description)}}/>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default EpisodeList;