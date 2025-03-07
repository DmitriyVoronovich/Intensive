import { STORAGE_KEYS } from '../../../shared';
import { User } from '../../../types';

const getUsers = (): User[] => {
  const registeredData = localStorage.getItem(STORAGE_KEYS.REGISTER);
  return registeredData ? JSON.parse(registeredData) : [];
};

export const isUserExists = (username: string): boolean => {
  const users = getUsers();
  return users.some((user) => user.username === username);
};

export const addUser = (user: User): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEYS.REGISTER, JSON.stringify(users));
};
