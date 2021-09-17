import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { updateWealth } from 'src/store/slices/wealth';

const useController = () => {
  const { user, wealth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const updateResume = useCallback(() => {
    dispatch(updateWealth(user.id));
  }, [dispatch, user.id]);

  return { user, wealth, updateResume };
};

export default useController;
