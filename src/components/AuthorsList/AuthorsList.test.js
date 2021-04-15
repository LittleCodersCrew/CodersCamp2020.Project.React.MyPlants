import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthorsList from './AuthorsList';

test('AuthorsList component render', () => {
  const names = ['Adrianna Krupa', 'Dominik Puchała', 'Jędrzej Ratajczak', 'Kamila Grusza', 'Konrad Mierzejewski', 'Weronika Brzęczkowska-Kuzianik', 'Filip Kuca - mentor'];
  render(
    <MemoryRouter initialEntries={['/']}>
      <AuthorsList />
    </MemoryRouter>
  );
  names.forEach((name) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
