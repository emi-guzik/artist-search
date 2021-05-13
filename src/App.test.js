import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from './redux/store';
import App from './App';

test('renders search results title', () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );

  expect(screen.getByText('Search results')).toBeInTheDocument();
});
