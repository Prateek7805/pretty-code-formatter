import React from 'react';
import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
export const ThemeData = createContext('light');
export const CodeData = createContext({
    unformatted: '',
    formatted: '',
    language: '',
    autoDetect: true
});

export default function PageContext({ children }) {
    const currentTheme = localStorage.getItem('theme');
    const [mode, setMode] = useState(currentTheme || 'light');
    const [code, setCode] = useState({
        unformatted: '',
        formatted: '',
        language: '',
        autoDetect: true
    });

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode
                }
            }),
        [mode]
    );

    return (
        <ThemeData.Provider value={{ mode, setMode }}>
            <CodeData.Provider value={{ code, setCode }}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </CodeData.Provider>
        </ThemeData.Provider>
    )
}