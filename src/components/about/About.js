import React from "react";
import "./about.css";
export default function About() {
  return (
    <div>
      <h1 className="about__title">О проекте</h1>
      <ul className="about__list">
        <p className="about__description"> В проекте использовал:</p>
        <li className="about__item">React</li>
        <li className="about__item">React-router</li>
        <li className="about__item">React-hooks</li>
        <li className="about__item">Динамические роуты</li>
        <li className="about__item">Асинхронные запросы</li>
        <li className="about__item">Внешние API</li>
        <li className="about__item">Переиспользование компонентов</li>
      </ul>
    </div>
  );
}
