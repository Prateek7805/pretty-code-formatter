import React from 'react';
import './RunButton.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { CodeData } from '../../Contexts/PageContext';
import formatCode from '../../../API/FormatCode/FormatCode';
export default function RunButton(){
    const {code, setCode} = useContext(CodeData);
    const handleFormatting = async () =>{
        try{
            const formattedCode = await formatCode(code.unformatted, code.language);
            setCode(prev=>({...prev, formatted: formattedCode}));
        }catch(error){
            console.log(error);
        }
    }
    return (
        <IconButton className='run-button' onClick={handleFormatting}>
            <PlayArrowIcon/>
        </IconButton>
    )
}