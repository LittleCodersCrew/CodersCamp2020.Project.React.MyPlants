import { render, screen } from '@testing-library/react';
import Input from './Input';

test('Input component render', () => {
  const testId = 'input';

  render(<Input text="Name" />);

  const test = screen.getByTestId(testId);
  expect(test).toBeInTheDocument();
});
