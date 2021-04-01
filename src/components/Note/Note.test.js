import React from 'react';
import { render, screen } from '@testing-library/react';
import Note from './Note';

describe('Note component render', () => {
  it('Gives the right text inside paragrapsh', () => {
    const text = 'Hello World!';
    const date = '01.04.2021';

    render(<Note noteText={text} noteDate={date} />);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
  });
});
