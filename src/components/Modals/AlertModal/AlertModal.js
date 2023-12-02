import React, { useContext } from 'react';
import Modal from '@mui/material/Modal';
import './AlertModal.css'
import { ModalData } from '../../Contexts/PageContext';
import CloseButton from '../../Buttons/CloseButton/CloseButton';

export default function AlertModal() {
    const { mData, setMData } = useContext(ModalData);
    const handleClose = () => setMData((prev) => ({ ...prev, alertModal: { ...prev.alertModal, open: false } }));

    return (
        <div>
            <Modal
                open={mData.alertModal.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modal-body'>
                    <div className='modal-close'><CloseButton/></div>
                    <p className='modal-title'>
                        {mData.alertModal.title}
                    </p>
                    <p className='modal-text'>
                        {mData.alertModal.msg}
                    </p>

                </div>
            </Modal>
        </div>
    );
}