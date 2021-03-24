import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('rendering Footer component', () => {
  const authors = 'Authors';
  const copyright = '©2021 Copyright';
  render(<Footer />);
  expect(screen.getByText(authors)).toBeInTheDocument();
  expect(screen.getByText(copyright)).toBeInTheDocument();
});
