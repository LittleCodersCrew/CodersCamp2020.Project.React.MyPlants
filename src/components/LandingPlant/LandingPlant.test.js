import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPlant from './LandingPlant';

describe('LandingPlant component render', () => {
  test('should render with correct image on /authors', () => {
    render(
      <MemoryRouter initialEntries={['/authors']}>
        <LandingPlant />
      </MemoryRouter>
    );
    const cactusImg = screen.getByAltText('cactus');
    expect(cactusImg).toBeInTheDocument();
  });

  test('should render with correct image on other paths', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <LandingPlant />
      </MemoryRouter>
    );
    const plantImg = screen.getByAltText('plant');
    expect(plantImg).toBeInTheDocument();
  });
});
