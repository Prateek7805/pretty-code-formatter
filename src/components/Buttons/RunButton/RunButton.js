import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { CodeData, ModalData } from '../../Contexts/PageContext';
import formatCode, { langParseMap } from '../../../API/FormatCode/FormatCode';
export default function RunButton(){
    const {code, setCode} = useContext(CodeData);
    const {setMData} = useContext(ModalData);
    const handleFormatting = async () =>{
        try{
            const language = code.language;
            const formattedCode = await formatCode(code.unformatted, language);
            const index = langParseMap.findIndex(item=>item.language === language);
            if(index === -1){
                throw new Error('Highlighted language not found: unsupported language')
            }
            const highlighted = langParseMap[index].highlighted;
            setCode(prev=>({...prev, formatted: formattedCode, highlighted}));
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
            <IconButton onClick={handleFormatting}>
                <Tooltip title='Beautify'>

                <PlayArrowIcon/>
                </Tooltip>
            </IconButton>
    )
}