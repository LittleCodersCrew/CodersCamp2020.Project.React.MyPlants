import { render } from '@testing-library/react';
import Background from './Background';

test('should render with type submit', () => {
  const { container } = render(<Background />);
  expect(container.querySelector('div')).toHaveClass('background');
});
