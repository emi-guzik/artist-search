import { React } from 'react';
import _ from 'lodash';

const ArtistsList = ({ artists, onArtistSelect, loading, error }) => {
  return (
    <div className="artists-list">
      {loading ? (
        <div className="loading-message">Loading...</div>
      ) : (
        <div>
          <div className="results-title">Search results</div>
          {artists?.map((artist) => (
            <div className="artist-name" key={artist.id} onClick={() => onArtistSelect(artist.id, artist.name)}>
              {artist.name}
            </div>
          ))}
        </div>
      )}

      {!_(error.length).isEmpty ? <div>{error}</div> : <div></div>}
    </div>
  );
};

export default ArtistsList;
