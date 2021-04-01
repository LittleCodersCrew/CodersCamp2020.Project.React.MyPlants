import React from 'react';
import { render, screen } from '@testing-library/react';
import PlantProfile from './PlantProfile';

describe('PlantProfile component render', () => {
  it('Gives the right text in the paragraph', () => {
    const text = 'Plant name';

    render(<PlantProfile name={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
