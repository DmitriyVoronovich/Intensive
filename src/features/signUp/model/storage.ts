export type FieldType = {
  username: string;
  password: string;
};

const STORAGE_KEY = 'register';

const getUsers = (): FieldType[] => {
  const registeredData = localStorage.getItem(STORAGE_KEY);
  return registeredData ? JSON.parse(registeredData) : [];
};

export const isUserExists = (username: string): boolean => {
  const users = getUsers();
  return users.some((user) => user.username === username);
};

export const addUser = (user: FieldType): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};
