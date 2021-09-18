import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Dashboard from './Dashboard';

describe('Dashboard > View', () => {
  it('should render', () => {
    const rendered = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(rendered).toBeDefined();
  });
});
