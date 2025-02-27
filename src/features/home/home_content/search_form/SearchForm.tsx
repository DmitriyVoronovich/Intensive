import css from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <form>
      <input className={css.product_search} type="text" placeholder="Поиск игры" />
      <button className={css.search_button}>Найти</button>
    </form>
  );
};
