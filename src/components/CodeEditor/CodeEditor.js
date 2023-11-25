import React, {useContext, useEffect} from 'react';
import './CodeEditor.css';
import { CodeData } from '../Contexts/PageContext';
import hljs from 'highlight.js';
export default function CodeEditor({props}) {
  const {code, setCode} = useContext(CodeData);
  const handleCodeUpdate = (e)=>{
    const text = e.target.value;
    setCode(prev=>({
        ...prev,
        unformatted: text
    }));
  }

  useEffect(() => {
    // Detect the language using highlight.js
    if(!code.autoDetect){
        return;
    }
    const detectedLanguage = hljs.highlightAuto(code.unformatted);
    const language = detectedLanguage.language;
    console.log(language);
    if (language) {
      setCode(prev=>({...prev, language}));
    }
  }, [setCode, code.unformatted, code.autoDetect]);

  return (
    <div className='code-editor'>
        <textarea 
                className='code-editor-textarea code-block-window' 
                onChange={handleCodeUpdate} 
                autoCorrect='off'
                spellCheck='false' 
                value={code.unformatted} 
                {...props}
        >
        </textarea>
    </div>
  );
}