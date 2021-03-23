import './AuthorsList.scss';
import React from 'react';

function AuthorsList() {
  return (
    <div className="authors">
      <a className="link" href="https://github.com/adax10" target="_blank" rel="noreferrer">Adrianna Krupa</a>
      <a className="link" href="https://github.com/Suegro24" target="_blank" rel="noreferrer">Dominik Puchała</a>
      <a className="link" href="https://github.com/Mrozelek" target="_blank" rel="noreferrer">Jędrzej Ratajczak</a>
      <a className="link" href="https://github.com/kami3la" target="_blank" rel="noreferrer">Kamila Grusza</a>
      <a className="link" href="https://github.com/KonradMierzejewski" target="_blank" rel="noreferrer">Konrad Mierzejewski</a>
      <a className="link" href="https://github.com/brzeczkowskaw" target="_blank" rel="noreferrer">Weronika Brzęczkowska-Kuzianik</a>
      <a className="link link--mentor" href="https://github.com/ruljin" target="_blank" rel="noreferrer">Filip Kuca - mentor</a>
    </div>
  );
}

export default AuthorsList;