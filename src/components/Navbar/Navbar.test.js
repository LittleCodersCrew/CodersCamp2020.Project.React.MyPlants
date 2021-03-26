import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component render', () => {
  it('should render for logged out user', () => {
    const menu = ['Plants', 'Chat', 'Login'];

    render(
      <MemoryRouter>
        <Navbar location="/" name="" />
      </MemoryRouter>
    );

    menu.forEach((word) => {
      expect(screen.getByText(word)).toBeInTheDocument();
    });
  });

  it('should render for logged in user', () => {
    const menu = ['My garden', 'Users', 'Events', 'Plants', 'Chat'];

    render(
      <MemoryRouter>
        <Navbar location="/" name="Test" />
      </MemoryRouter>
    );

    menu.forEach((word) => {
      expect(screen.getByText(word)).toBeInTheDocument();
    });
  });
});
