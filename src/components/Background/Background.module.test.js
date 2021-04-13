import { render } from '@testing-library/react';
import Background from './Background';

test('should render with right class', () => {
  const { container } = render(
    <Background>
      <div />
    </Background>
  );
  expect(container.querySelector('div')).toHaveClass('wrapper');
});
