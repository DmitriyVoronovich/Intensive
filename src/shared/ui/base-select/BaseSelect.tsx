import type {SelectProps} from 'antd';
import {Select} from 'antd';
import css from './BaseSelect.module.css';

type Props = {
    placeholder: string;
    options: { value: number; label: string }[];
    onChange: (value: number[]) => void;
    value:  number[];
    defaultValue?: number[];
};
type HandleSelectProps = SelectProps['onChange'];

export function BaseSelect({
                               options,
                               placeholder,
                               onChange,
                               defaultValue,
                               ...restProps
                           }: Props) {
    const handleChange: HandleSelectProps = (value: number[]) => {
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
            defaultValue={defaultValue}
            onChange={handleChange}
            options={options}
            {...restProps}
        />
    );
}