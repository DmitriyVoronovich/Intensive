import {Button, Modal} from "antd";
import css from './InformationModal.module.css';
import './InformationModal.css';

type Props = {
    toggle: () => void;
    description: string;
}

export const InformationModal = ({toggle, description}: Props) => {
    return (
        <Modal
            open={true}
            footer={[
                <Button key="ok" onClick={toggle} >
                    Ок
                </Button>,
            ]}
            closable={false}
            className={css.container}
        >
               <p className={css.description}>{description}</p>
        </Modal>
    );
};