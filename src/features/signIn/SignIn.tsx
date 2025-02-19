import React from 'react';
import css from './SignIn.module.css';
import { Button, Form, Input, message } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

interface FieldType {
  username: string;
  password: string;
}

export const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = ({ username, password }: FieldType) => {
    const registeredData = localStorage.getItem('register');
    if (registeredData) {
      const registeredUsers: Array<FieldType> = JSON.parse(registeredData);

      const user = registeredUsers.find((user) => user.username === username);

      if (!user) {
        void message.error('Пользователь с таким именем не зарегистрирован.');
        return;
      }

      if (user.password === password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        navigate('/');
      } else {
        void message.error('Неправильный пароль. Попробуйте снова.');
      }
    }
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h3 className={css.formTitle}>Вход в личный кабинет пользователя</h3>
        <p className={css.formDescription}>
          Для входа необходимо ввести имя пользователя и пароль
        </p>
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          className={css.form}
        >
          <Form.Item
            label="Имя пользователя"
            name="username"
            className={css.formItem}
            rules={[{ required: true, message: 'Введите имя пользователя' }]}
          >
            <Input placeholder="Имя пользователя" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            className={css.formItem}
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password placeholder="Пароль" prefix={<KeyOutlined />} />
          </Form.Item>

          <Form.Item>
            <div className={css.btnContainer}>
              <Button htmlType="submit" className={css.btn}>
                Подтвердить
              </Button>
              <Button
                htmlType="button"
                className={css.btnBack}
                onClick={() => navigate('/')}
              >
                Назад
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
