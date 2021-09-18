import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

describe('Dashboard > View', () => {
  it('should render', () => {
    const rendered = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(rendered).toBeDefined();
  });
});
