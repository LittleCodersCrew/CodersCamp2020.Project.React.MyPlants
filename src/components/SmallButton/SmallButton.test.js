import { render, screen } from '@testing-library/react';
import SmallButton from './SmallButton';

describe('Button component render', () => {
  it('Should render with type button', () => {
    const test = 'Hello';

    render(<SmallButton text={test} onClick={() => null} fontsize="80px" />);

    expect(screen.getByText(test)).toHaveAttribute('type', 'button');
  });

  it('Should render with type submit', () => {
    const type = 'submit';
    const test = 'Hello';

    render(<SmallButton type={type} text={test} onClick={() => null} fontsize="20px" />);

    expect(screen.getByText(test)).toHaveAttribute('type', 'submit');
  });

  it('Uses the choosen font size', () => {
    const text = 'Hello World';
    const font = '80px';

    render(<SmallButton text={text} fontsize={font} onClick={() => null} />);

    expect(screen.getByText(text)).toHaveAttribute('style', 'font-size: 80px;');
  });
});
