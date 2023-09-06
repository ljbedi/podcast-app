
import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
};

function PodcastModal({ podcast, onClose }) {
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <button onClick={onClose}>Close</button>
        <h2>{podcast.name}</h2>
        <p>Description: {podcast.description}</p>
        
        {podcast.genres}
      </div>
    </div>
  );


  }

export default PodcastModal;
