import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text component render', () => {
  it('Gives the right text inside paragraph', () => {
    const words = 'Hello World';
    const font = '80px';

    render(<Text text={words} fontsize={font} />);

    expect(screen.getByText(words)).toBeInTheDocument();
  });

  it('Uses the choosen font size', () => {
    const text = 'Hello World';
    const font = '80px';

    render(<Text text={text} fontsize={font} />);

    expect(screen.getByText(text)).toHaveAttribute('style', 'font-size: 80px;');
  });
});
