import css from './HomeContent.module.css';
import { HomeTitle } from './home_title';
import { HomeInformation } from './home_information';

export const HomeContent = () => {
  return (
    <main className = {css.content}>
      <HomeTitle/>
      <HomeInformation/>
    </main>
  );
};
