import { React } from 'react';
import _ from 'lodash';

const AlbumDetails = ({ title, cover_medium, tracks, release_date, loading, error }) => {
  const calculateDuration = (durationInSeconds) => {
    var hrs = ~~(durationInSeconds / 3600);
    var mins = ~~((durationInSeconds % 3600) / 60);
    var secs = ~~durationInSeconds % 60;

    var duration = '';
    if (hrs > 0) {
      duration += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    duration += '' + mins + ':' + (secs < 10 ? '0' : '');
    duration += '' + secs;
    return duration;
  };

  return (
    <div className="album-details-container">
      {loading ? (
        <div className="loading-message">Loading...</div>
      ) : (
        <div>
          <img src={cover_medium} alt={title} />
          <div className="album-details-title">{title}</div>

          <div className="tracks-header">
            <div className="tracks-table-col-1">#</div>
            <div className="tracks-table-col-2">Title</div>
            <div className="tracks-table-col-3">Artist</div>
            <div className="tracks-table-col-4">Time</div>
            <div className="tracks-table-col-5">Released</div>
          </div>

          {tracks.map((track, index) => (
            <div key={track.id} className="track-row">
              <div className="tracks-table-col-1">{index + 1}</div>
              <div className="tracks-table-col-2">{track.title}</div>
              <div className="tracks-table-col-3">{track.artist.name}</div>
              <div className="tracks-table-col-4">{calculateDuration(track.duration)}</div>
              <div className="tracks-table-col-5">{release_date.substring(0, 4)}</div>
            </div>
          ))}
        </div>
      )}

      {!_(error.length).isEmpty ? <div>{error}</div> : <div></div>}
    </div>
  );
};

export default AlbumDetails;
