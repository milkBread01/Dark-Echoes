

import { useState } from 'react';
import { useEffect } from 'react';
import { episodeList } from './data.js';
import './App.css';
import Episode from './Episode.jsx';

function App() {
  
  const seriesTitle = 'The Dark Chronicles';
  const [episodes, setEpisodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <main className='episodesContainer'>

      <header className = 'series-title'>
        {seriesTitle}
      </header>

      <section className ='main-content'>

        {/* Create List of episodes */}
        <div className ="episodes-list">
          {/* Make clickable */}
          {episodes.map((singleEpisode) => 
          <h1
            key = {singleEpisode.id}            
            onClick={() => setSelectedEpisode(singleEpisode)} /* Set selected episode */
          >
            {singleEpisode.title} {/* Display Names */}
          </h1>
          )}
        </div>

        {/* Display Selected Episode Information */}
        <div className ="chosen-episode-content">
          {/* For selected Episode */}
          {selectedEpisode 
            ? 
          (
            <
              /* Call Episode Component */
              Episode 
                id={selectedEpisode.id} 
                title={selectedEpisode.title} 
                description={selectedEpisode.description} 
                setSelectedEpisode={setSelectedEpisode} 
            />
          ) 
            : /* if episode not chosen display 'Select Episode text' */
          (
            <h3>Select an Episode</h3>
          )}

        </div>
      </section>
    </main>
  )
}
export default App;
