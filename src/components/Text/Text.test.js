import { render, screen } from '@testing-library/react';
import Text from './Text';

test('Text component render', () => {
  const words = 'Hello World';

  render(<Text text="Hello World" />);

  expect(screen.getByText(words)).toBeInTheDocument();
});
