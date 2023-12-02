import React from 'react';
import { useContext } from 'react';
import { IconButton } from '@mui/material';
import { ModalData } from '../../Contexts/PageContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export default function CloseButton(){
    const {setMData} = useContext(ModalData);
    const hClose = () => setMData(prev=>({
        ...prev,
        alertModal:{
            ...prev.alertModal,
            open:false
        }
    }))
    return (
        <IconButton className='run-button' onClick={hClose}>
            <HighlightOffIcon/>
        </IconButton>
    )
}