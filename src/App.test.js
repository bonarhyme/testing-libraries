import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Domain link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Domain/i);
  expect(linkElement).toBeInTheDocument();
});
