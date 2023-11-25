import React from 'react';
import {useEffect, useContext} from 'react';
import { ThemeData } from '../Contexts/PageContext';
import { useTheme } from '@mui/material';
import ThemeSwitch from '../Switch/ThemeSwitch/ThemeSwitch';

export default function ThemeToggle(){
    const {mode, setMode} = useContext(ThemeData);
    const theme = useTheme();

    const handleThemeToggle = (themeMode) => {
        console.log(themeMode)
        setMode(themeMode);
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',  theme.palette.mode);
        localStorage.setItem('theme', theme.palette.mode);
    }, [theme]);

    return (
        <ThemeSwitch mode={mode} onClick={handleThemeToggle}/>
    );
}