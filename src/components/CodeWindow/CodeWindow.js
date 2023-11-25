import React, { useContext } from 'react';
import './CodeWindow.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'highlight.js/styles/default.css'

import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTheme } from '@emotion/react';
import { CodeData } from '../Contexts/PageContext';

export default function CodeWindow(){
    const theme = useTheme();
    const {code} = useContext(CodeData);
    const codeTheme = theme.palette.mode === "light"? vs : vscDarkPlus;
    
    return (
            <div className='codeblock-wrapper'>
                <IconButton className='copy-btn' variant='outlined'>
                    <ContentCopyIcon/>
                </IconButton>
            <SyntaxHighlighter 
                className='codeblock-window'
                showLineNumbers={true}
                language={code.language} 
                style={codeTheme} 
                >
                {code.formatted}
            </SyntaxHighlighter>
            </div>
    );
};
