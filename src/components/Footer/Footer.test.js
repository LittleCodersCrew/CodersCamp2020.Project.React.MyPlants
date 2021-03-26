import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Footer from './Footer';

test('rendering Footer component', () => {
  const words = ['Authors', '©2021 Copyright'];
  render(
    <MemoryRouter initialEntries={['/']}>
      <Footer />
    </MemoryRouter>
  );
  words.forEach((word) => {
    expect(screen.getByText(word)).toBeInTheDocument();
  });
});
