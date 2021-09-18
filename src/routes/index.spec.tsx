import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Routes from './index';

describe('Dashboard > View', () => {
  it('should render', () => {
    const rendered = render(
      <Provider store={store}>
        <Routes />
      </Provider>
    );

    expect(rendered).toBeDefined();
  });
});
