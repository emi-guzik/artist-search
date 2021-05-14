import { React, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAlbumFromArtist, GetArtists, GetAlbumDetails } from '../redux/actions';
import debounce from 'lodash.debounce';
import ArtistsList from './ArtistsList';
import AlbumDetails from './AlbumDetails';
import AlbumsList from './AlbumsList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const artistsList = useSelector((state) => state.Artists);
  const albumsList = useSelector((state) => state.Albums);
  const albumDetails = useSelector((state) => state.AlbumDetails);

  const [showArtistsList, setShowArtistsList] = useState(false);
  const [showAlbumsList, setShowAlbumsList] = useState(false);
  const [showTracks, setShowTracks] = useState(false);
  const [activeArtistName, setActiveArtistName] = useState('');

  const debouncedSave = useMemo(() => debounce((value) => dispatch(GetArtists(value)), 500), [dispatch]);

  const onSearch = (e) => {
    debouncedSave(e.target.value);
    if (e.target.value.length > 0) {
      setShowArtistsList(true);
    } else {
      setShowArtistsList(false);
    }
  };

  const onArtistSelect = (artistId, artistName) => {
    dispatch(GetAlbumFromArtist(artistId));

    setShowArtistsList(false);
    setShowAlbumsList(true);
    setShowTracks(false);
    setActiveArtistName(artistName);
  };

  const onAlbumSelect = (album) => {
    dispatch(GetAlbumDetails(album.id));

    setShowTracks(true);
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <input placeholder="Search here" type="text" onChange={(e) => onSearch(e)} />
          <div className="search-button">Search</div>
        </div>

        <div className={showArtistsList ? 'artists-list-visible' : 'artists-list-hidden'}>
          <ArtistsList
            loading={artistsList.loading}
            artists={artistsList.data}
            error={artistsList.errorMsg}
            onArtistSelect={(artistId, artistName) => onArtistSelect(artistId, artistName)}
          />
        </div>
      </div>

      {showAlbumsList ? (
        <AlbumsList
          artistName={activeArtistName}
          albumsList={albumsList.data}
          onAlbumSelect={(album) => onAlbumSelect(album)}
          error={albumsList.errorMsg}
          loading={albumsList.loading}
        />
      ) : (
        <div></div>
      )}

      {showTracks && albumDetails.data.tracks !== undefined ? (
        <AlbumDetails
          title={albumDetails.data.title}
          cover_medium={albumDetails.data.cover_medium}
          release_date={albumDetails.data.release_date}
          tracks={albumDetails.data.tracks.data}
          loading={albumDetails.loading}
          error={albumDetails.errorMsg}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Dashboard;
