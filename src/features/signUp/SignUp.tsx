import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../shared';
import styles from './SignUp.module.css';
import './SignUp.css';
import { FieldType, addUser, isUserExists } from './model';
import { passwordRules, usernameRules } from './model';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = ({ username, password }: FieldType) => {
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
          <div className={styles.buttons}>
            <Form.Item>
              <Button htmlType="submit" className={styles.button}>
                Подтвердить
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="button"
                className={styles.buttonBack}
                onClick={returnHome}
              >
                Назад
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};
