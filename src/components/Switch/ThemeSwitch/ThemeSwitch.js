import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';

export default function ThemeSwitch({mode, onClick}){
    return (
        <>
        {(mode === 'dark')? (
            <IconButton onClick={()=>onClick('light')}>
                <LightModeIcon/>
            </IconButton>
        ):(
            <IconButton onClick={()=>onClick('dark')}>
                <DarkModeIcon/>
            </IconButton>
        )}
        </>
    )
}