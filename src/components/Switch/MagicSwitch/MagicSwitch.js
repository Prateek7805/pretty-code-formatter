import React from 'react';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import AutoFixOffIcon from '@mui/icons-material/AutoFixOff';
import { IconButton, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { CodeData } from '../../Contexts/PageContext';
export default function MagicSwitch(){
    const {code, setCode} = useContext(CodeData);
    const handleAutoDetect = ()=>{
        setCode(prev=>({...prev, autoDetect: !prev.autoDetect}));
    }
    return (
        <>
        {(code.autoDetect)? (
            <Tooltip title='Turn off auto lang detection'>
                <IconButton onClick={handleAutoDetect}>
                    <AutoFixOffIcon/>
                </IconButton>
            </Tooltip>
        ):(
            <Tooltip title='Turn on auto lang detection'>
                <IconButton onClick={handleAutoDetect}>
                    <AutoFixNormalIcon/>
                </IconButton>
            </Tooltip>
        )}
        </>
    )
}