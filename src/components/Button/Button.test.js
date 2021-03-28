import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component render', () => {
  test('should render with type button', () => {
    const test = 'Hello';
    render(<Button text={test} />);
    expect(screen.getByText(test)).toHaveAttribute('type', 'button');
  });

  test('should render with type submit', () => {
    const type = 'submit';
    const test = 'Hello';
    render(<Button type={type} text={test} />);
    expect(screen.getByText(test)).toHaveAttribute('type', 'submit');
  });
});
