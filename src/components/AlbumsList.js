import { React } from 'react';
import Album from './Album';
import _ from 'lodash';

const AlbumsList = ({ artistName, albumsList, onAlbumSelect, error, loading }) => {
  const onAlbumSelectAction = (album) => {
    onAlbumSelect(album);
  };

  return (
    <div className="albums-list-container">
      {loading ? (
        <div className="loading-message">Loading...</div>
      ) : (
        <div>
          <div className="albums-list-title">Search results for "{artistName}"</div>
          <div className="albums-list-subtitle">ALBUMS</div>
          <div className="albums-list">
            {albumsList.map((album) => (
              <Album key={album.id} album={album} onAlbumSelect={() => onAlbumSelectAction(album)} />
            ))}
          </div>
        </div>
      )}

      {!_(error.length).isEmpty ? <div>{error}</div> : <div></div>}
    </div>
  );
};

export default AlbumsList;
