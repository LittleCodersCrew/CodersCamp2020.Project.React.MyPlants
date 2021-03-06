import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlantProfile from './PlantProfile';

describe('PlantProfile component render', () => {
  it('Gives the right text in the paragraph', () => {
    const text = 'Plant';
    const id = 'id';
    const photo = 'photo';

    render(
      <MemoryRouter initialEntries={['/']}>
        <PlantProfile plantName={text} plantId={id} plantPhoto={photo} />
      </MemoryRouter>
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
