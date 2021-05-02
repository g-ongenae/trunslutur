import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders title element', () => {
  render(<App />);
  const h1 = screen.getByText(/trunslutur/i);
  expect(h1).toBeInTheDocument();
});
