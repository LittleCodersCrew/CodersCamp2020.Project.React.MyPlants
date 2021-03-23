import { render, screen } from '@testing-library/react';
import AuthorsList from './AuthorsList';

test('rendering AuthorsList component', () => {
  const names = ['Adrianna Krupa', 'Dominik Puchała', 'Jędrzej Ratajczak', 'Kamila Grusza', 'Konrad Mierzejewski', 'Weronika Brzęczkowska-Kuzianik', 'Filip Kuca - mentor'];
  render(<AuthorsList />);
  names.forEach(name => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
