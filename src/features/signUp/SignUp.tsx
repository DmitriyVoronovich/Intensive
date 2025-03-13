import React from 'react';
import { Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../shared';
import styles from './SignUp.module.css';
import './SignUp.css';
import { addUser, isUserExists } from './model';
import { passwordRules, usernameRules } from './model';
import { User } from '../../types';
import { BaseButton } from '../../shared';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = ({ username, password }: User) => {
    if (isUserExists(username)) {
      void message.error('Пользователь с таким именем уже зарегистрирован!');
      return;
    }

    addUser({ username, password });
    navigate(PATHS.SINGNIN);
  };

  const returnHome = () => {
    navigate(PATHS.HOME);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Регистрация</h2>
        <Form onFinish={onFinish} layout="vertical" className={styles.form}>
          <Form.Item
            label="Имя"
            name="username"
            rules={usernameRules}
            className={styles.formItem}
          >
            <Input placeholder="Ваше имя" />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={passwordRules}
            className={styles.formItem}
          >
            <Input.Password type="password" placeholder="Ваш пароль" />
          </Form.Item>
          <Form.Item>
            <div className={styles.buttons}>
              <BaseButton buttonCategory={'submit'}>Подтвердить</BaseButton>
              <BaseButton onClick={returnHome}>Назад</BaseButton>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
