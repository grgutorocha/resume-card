import { useEffect } from 'react';

import useController from './useController';
import View from './View';

const Dashboard = () => {
  const {
    wealth: { requesting, error, wealth },
    updateResume,
  } = useController();

  useEffect(() => {
    updateResume();
  }, [updateResume]);

  return <View requesting={requesting} error={error} wealth={wealth} updateResume={updateResume} />;
};

export default Dashboard;
