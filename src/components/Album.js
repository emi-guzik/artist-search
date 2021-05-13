import { React } from 'react';

const Album = (props) => {
  const album = props.album;
  return (
    <div className="album-container" onClick={props.onAlbumSelect}>
      <img src={album.cover_medium} alt={album.title} />
      <div className="album-name">{album.title}</div>
    </div>
  );
};

export default Album;
