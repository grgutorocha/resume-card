import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { postError, postSuccess, postSuccessEmpty } from 'src/mocks/handlers/wealth';
import { server } from 'src/mocks/server';
import { store } from '../../store';
import { constants } from '../../utils/constants';
import Dashboard from './index';

const { MESSAGE } = constants;

describe('Dashboard > Container', () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  it('should render container with error message', async () => {
    server.use(postError);

    const rendered = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(await rendered.findByText(MESSAGE.REQUEST_ERROR)).toBeInTheDocument();
  });

  it('should render container with no data message', async () => {
    server.use(postSuccessEmpty);

    const rendered = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(await rendered.findByText(MESSAGE.NO_DATA)).toBeInTheDocument();
  });

  it('should render container with data', async () => {
    server.use(postSuccess);

    const rendered = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(await rendered.findByText('R$ 3.200.876,00')).toBeInTheDocument();
  });
});
