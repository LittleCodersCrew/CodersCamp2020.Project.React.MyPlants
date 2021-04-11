import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './Message';

describe('Message component render', () => {
  it('Gives the right text inside paragrapsh', () => {
    render(<Message userName="name" dateTime="123" content="test" />);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
