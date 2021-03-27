import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Text from './Text';

test('Text component render', () => {
  const words = 'Hello World';

  render(
    <MemoryRouter>
      <Text text="Hello World" />
    </MemoryRouter>
  );

  expect(screen.getByText(words)).toBeInTheDocument();
});
