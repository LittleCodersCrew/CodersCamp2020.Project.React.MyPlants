import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('rendering Footer component', () => {
  const names = ['Authors'];
  render(<Footer />);
  names.forEach((name) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
