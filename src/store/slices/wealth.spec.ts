import wealthReducer, { WealthState, isRequesting, requestError, requestSucces } from './wealth';

describe('wealth Reducer', () => {
  const initialState: WealthState = {
    requesting: false,
    error: undefined,
    wealth: {},
  };

  const ERROR_MESSAGE = 'ERROR_MESSAGE';

  it('should handle initial state', () => {
    expect(wealthReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle requesting', () => {
    const actual = wealthReducer(initialState, isRequesting());

    expect(actual.requesting).toEqual(true);
    expect(actual.error).toEqual(initialState.error);
  });

  it('should handle request success', () => {
    const actual = wealthReducer(
      initialState,
      requestSucces({
        gain: 1,
        total: 2,
      })
    );

    expect(actual.requesting).toEqual(initialState.requesting);
    expect(actual.error).toEqual(initialState.error);
    expect(actual.wealth.gain).toEqual(1);
    expect(actual.wealth.profitability).toEqual(undefined);
  });

  it('should handle request error', () => {
    const actual = wealthReducer(initialState, requestError(ERROR_MESSAGE));

    expect(actual.requesting).toEqual(initialState.requesting);
    expect(actual.error).toEqual(ERROR_MESSAGE);
  });
});
