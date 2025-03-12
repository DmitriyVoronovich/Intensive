import { Modal } from 'antd';
import css from './InformationModal.module.css';
import './InformationModal.css';
import { BaseButton } from '../../../../shared';

type Props = {
  toggle: () => void;
  description: string;
};

export const InformationModal = ({ toggle, description }: Props) => {
  return (
    <Modal
      open={true}
      footer={[
        <BaseButton key="ok" onClick={toggle}>
          Ок
        </BaseButton>,
      ]}
      closable={false}
      className={css.container}
    >
      <p className={css.description}>{description}</p>
    </Modal>
  );
};
