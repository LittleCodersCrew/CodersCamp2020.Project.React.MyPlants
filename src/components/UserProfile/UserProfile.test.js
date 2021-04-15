import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserProfile from './UserProfile';

describe('UserProfile component render', () => {
  it('Gives the right text in the paragraph', () => {
    const text = 'name';
    const id = '1234456';

    render(
      <MemoryRouter initialEntries={['/']}>
        <UserProfile usersName={text} usersId={id} />
      </MemoryRouter>
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
