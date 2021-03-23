import { render, screen } from '@testing-library/react';
import AuthorsList from './AuthorsList';

test('rendering AuthorsList component', () => {
  render(<AuthorsList />);
  const linkElement = screen.getByText(/Kamila/i);
  expect(linkElement).toBeInTheDocument();
});
