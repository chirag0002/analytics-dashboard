import React from 'react';
import Intensity from '../data/Intensity';

function MainContent({ selectedPage }) {
  return (
    <div className="main-content">
      <h2>{selectedPage}</h2>
      <p>This is the content for {selectedPage}.</p>
      <Intensity />
    </div>
  );
}

export default MainContent;
