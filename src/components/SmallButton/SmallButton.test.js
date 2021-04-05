import { render, screen } from '@testing-library/react';
import SmallButton from './SmallButton';

describe('Button component render', () => {
  it('Should render with type button', () => {
    const test = 'Hello';

    render(<SmallButton text={test} />);

    expect(screen.getByText(test)).toHaveAttribute('type', 'button');
  });

  it('Should render with type submit', () => {
    const type = 'submit';
    const test = 'Hello';

    render(<SmallButton type={type} text={test} />);

    expect(screen.getByText(test)).toHaveAttribute('type', 'submit');
  });

  it('Uses the choosen font size', () => {
    const text = 'Hello World';
    const font = '80px';

    render(<SmallButton text={text} fontsize={font} />);

    expect(screen.getByText(text)).toHaveAttribute('style', 'font-size: 80px;');
  });
});
