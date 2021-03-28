import { render, screen } from '@testing-library/react';
import Select from './Select';

test('Select component render', () => {
  const title = 'Watering';
  const values = ['aaa', 'vvv', 'ddd'];

  render(<Select title={title} values={values} />);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(values[0])).toBeInTheDocument();
  expect(screen.getByText(values[1])).toBeInTheDocument();
  expect(screen.getByText(values[2])).toBeInTheDocument();
});
