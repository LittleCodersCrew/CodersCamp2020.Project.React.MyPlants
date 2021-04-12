import React from 'react';
import { render, screen } from '@testing-library/react';
import PlantProfile from './PlantProfile';

describe('PlantProfile component render', () => {
  it('Gives the right text in the paragraph', () => {
    const text = 'Plant name';
    const id = 'id';
    const photo = 'photo';

    render(<PlantProfile plantName={text} plantId={id} plantPhoto={photo} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
