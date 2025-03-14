import { useCallback, useState } from 'react';

export const useModal = (initialIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [description, setDescription] = useState('');

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleModal = useCallback((newDescription = '') => {
    setIsOpen((prev) => !prev);
    setDescription(newDescription);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    description,
  };
};
