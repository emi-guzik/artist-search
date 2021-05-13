import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetArtists } from '../redux/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const artistsList = useSelector((state) => state.Artists);

  React.useEffect(() => {
    dispatch(GetArtists('week'));
  }, [dispatch]);

  const showData = () => {
    if (artistsList.length > 0) {
      return artistsList.data.map((artist) => {
        return <div>{artist.name}</div>;
      });
    }

    if (artistsList.loading) {
      return <div>Loading...</div>;
    }

    if (artistsList.errorMsg !== '') {
      return <div>{artistsList.errorMsg}</div>;
    }
  };

  return <div>{showData()}</div>;
};

export default Dashboard;
