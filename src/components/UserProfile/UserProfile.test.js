import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile component render', () => {
  it('Gives the right text in the paragraph', () => {
    const text = 'User name';

    render(<UserProfile name={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
