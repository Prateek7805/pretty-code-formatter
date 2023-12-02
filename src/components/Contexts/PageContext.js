import React from 'react';
import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ThemeData = createContext('light');
export const CodeData = createContext({
    unformatted: '',
    formatted: '',
    language: ''
});
export const ModalData = createContext({
    alertModal: {
        open: false,
        title: '',
        msg: ''
    }
});
export default function PageContext({ children }) {
    const currentTheme = localStorage.getItem('theme');
    const [mode, setMode] = useState(currentTheme || 'light');
    const [code, setCode] = useState({
        unformatted: '',
        formatted: '',
        language: ''
    });
    const [mData, setMData] = useState({
        alertModal: {
            open: false,
            title: '',
            msg: ''
        }
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
            <ModalData.Provider value={{ mData, setMData }}>
                <CodeData.Provider value={{ code, setCode }}>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </CodeData.Provider>
            </ModalData.Provider>
        </ThemeData.Provider>
    )
}