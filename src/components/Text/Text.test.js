import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text component render', () => {
  it('Gives the right text inside paragraph', () => {
    const words = 'Hello World';

    render(<Text text="Hello World" />);

    expect(screen.getByText(words)).toBeInTheDocument();
  });

  it('Uses the choosen font size', () => {
    const text = 'Hello World';
    render(<Text text={text} fontsize="80px" />);

    expect(screen.getByText(text)).toHaveAttribute('style', 'font-size: 80px;');
  });
});
