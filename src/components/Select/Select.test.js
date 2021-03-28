import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Select from './Select';

test('Select component render', () => {
  const title = 'Watering';
  const values = ['aaa', 'vvv', 'ddd'];

  render(
    <MemoryRouter>
      <Select title={title} values={values} />
    </MemoryRouter>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(values[0])).toBeInTheDocument();
  expect(screen.getByText(values[1])).toBeInTheDocument();
  expect(screen.getByText(values[2])).toBeInTheDocument();
});
