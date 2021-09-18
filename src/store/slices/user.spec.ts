import userReducer, { updateUserId, initialState } from './user';

describe('user Reducer', () => {
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle requesting', () => {
    const actual = userReducer(initialState, updateUserId(3));

    expect(actual.id).not.toEqual(initialState.id);
  });
});
