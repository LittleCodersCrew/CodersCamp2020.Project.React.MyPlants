import { render, screen } from '@testing-library/react';
import LandingPlant from './LandingPlant';

describe('rendering LandingPlant', () => {
  test('rendering LandingPlant component on pathname authors', () => {
    Object.defineProperty(window, 'location', {
      value: { pathname: '/authors' },
      writable: true
    });

    render(<LandingPlant />);
    const cactusImg = screen.getByAltText('cactus');
    expect(cactusImg).toBeInTheDocument();
  });

  test('rendering LandingPlant component on other paths', () => {
    Object.defineProperty(window, 'location', {
      value: {
        value: { pathname: '/' },
        writable: true
      }
    });

    render(<LandingPlant />);
    const plantImg = screen.getByAltText('plant');
    expect(plantImg).toBeInTheDocument();
  });
});
