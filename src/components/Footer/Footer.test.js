import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('rendering Footer component', () => {
  const words = ['Authors', '©2021 Copyright'];
  render(<Footer />);
  words.forEach((word) => {
    expect(screen.getByText(word)).toBeInTheDocument();
  });
});
