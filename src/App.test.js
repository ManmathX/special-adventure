import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/hemant this idot and very idot/i);
  expect(linkElement).toBeInTheDocument();
});
