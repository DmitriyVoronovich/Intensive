import css from './HomeContent.module.css';
import { HomeTitle } from './home_title';
import { HomeInformation } from './home_information';
import { SearchComponent } from '../../search-component';

export const HomeContent = () => {
  return (
    <main className={css.content}>
      <HomeTitle />
      <HomeInformation />
      <div className={css.searchContainer}>
        <SearchComponent />
      </div>
    </main>
  );
};
