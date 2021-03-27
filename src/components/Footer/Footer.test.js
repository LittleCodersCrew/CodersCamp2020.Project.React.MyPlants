import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

test('Footer component render', () => {
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
