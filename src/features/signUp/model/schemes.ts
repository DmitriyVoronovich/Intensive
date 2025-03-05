import { Rule } from 'antd/lib/form';

export const usernameRules: Rule[] = [
  { required: true, message: 'Введите имя!' },
  { min: 3, message: 'Имя должно содержать минимум 3 символа!' },
];

export const passwordRules: Rule[] = [
  { required: true, message: 'Введите пароль!' },
  { min: 6, message: 'Пароль должен содержать минимум 6 символов!' },
];
