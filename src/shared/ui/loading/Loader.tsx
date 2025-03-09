import { Spin } from 'antd';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.main}>
      <Spin size="large" />
    </div>
  );
};
