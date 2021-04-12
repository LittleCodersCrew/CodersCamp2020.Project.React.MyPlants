import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile component render', () => {
  it('Gives the right text in the paragraph', () => {
    const text = 'name';
    const id = '1234456';

    render(<UserProfile usersName={text} usersId={id} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
