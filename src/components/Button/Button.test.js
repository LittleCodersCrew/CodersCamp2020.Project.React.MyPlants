import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button component render', () => {
  const test = 'Hello';
  render(<Button text={test} />);

  expect(screen.getByText(test)).toBeInTheDocument();
});
