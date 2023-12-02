import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { CodeData, ModalData } from '../../Contexts/PageContext';
import formatCode from '../../../API/FormatCode/FormatCode';
export default function RunButton(){
    const {code, setCode} = useContext(CodeData);
    const {setMData} = useContext(ModalData);
    const handleFormatting = async () =>{
        try{
            const formattedCode = await formatCode(code.unformatted, code.language);
            setCode(prev=>({...prev, formatted: formattedCode}));
        }catch(error){
            
            setMData(prev=>({
                ...prev,
                alertModal: {
                    ...prev.alertModal,
                    open: true,
                    title: error.name,
                    msg: error.message
                }
            }));
        }
    }
    return (
            <IconButton className='run-button' onClick={handleFormatting}>
                <Tooltip title='Beautify'>

                <PlayArrowIcon/>
                </Tooltip>
            </IconButton>
    )
}