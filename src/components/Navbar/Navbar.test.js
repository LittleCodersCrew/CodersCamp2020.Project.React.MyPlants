import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('render navbar for logged out user', () => {
  const menu = ['Plants', 'Chat', 'Login'];
  render(<Navbar isLoggedIn={false} />);
  menu.forEach((word) => {
    expect(screen.getByText(word)).toBeInTheDocument();
  });
});

test('render navbar for logged in user', () => {
  const menu = ['My garden', 'Users', 'Events', 'Plants', 'Chat'];
  render(<Navbar isLoggedIn />);
  menu.forEach((word) => {
    expect(screen.getByText(word)).toBeInTheDocument();
  });
});
