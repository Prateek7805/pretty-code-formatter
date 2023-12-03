import React, { useContext } from 'react';
import './CodeWindow.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'highlight.js/styles/default.css'
import { useTheme } from '@emotion/react';
import { CodeData, ModalData } from '../Contexts/PageContext';
import CopyTextButton from '../Buttons/CopyTextButton/CopyTextButton';

export default function CodeWindow(){
    const theme = useTheme();
    const {code} = useContext(CodeData);
    const {setMData} = useContext(ModalData);
    const codeTheme = theme.palette.mode === "light"? vs : vscDarkPlus;
    const copyTextToClipBoard = async () => {
        try {
            const formattedCode = code.formatted;
            if(formattedCode === '' || formattedCode === undefined){
                return;
            }
            await navigator.clipboard.writeText(formattedCode);
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
            <div className='codeblock-wrapper'>
                <CopyTextButton onClick={copyTextToClipBoard}/>
            <SyntaxHighlighter 
                className='codeblock-window'
                showLineNumbers={true}
                language={code.highlighted.toLowerCase()} 
                style={codeTheme}
                >
                {code.formatted}
            </SyntaxHighlighter>
            </div>
    );
};
