import { Select } from 'antd';
import { GameResultType } from '../../../types';
import css from './BaseSelect.module.css';

type Props = {
  placeholder: string;
  options: GameResultType[];
  onChange: (value: string | string[]) => void;
};

export const BaseSelect = ({ options, placeholder, onChange }: Props) => {
  const handleChange = (value: string | string[]) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select
      className={css.select}
      mode="multiple"
      size="middle"
      placeholder={placeholder}
      defaultValue={[]}
      onChange={handleChange}
      options={options}
    />
  );
};
