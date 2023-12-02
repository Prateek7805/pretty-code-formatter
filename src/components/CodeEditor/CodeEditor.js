import React, {useContext} from 'react';
import './CodeEditor.css';
import { CodeData } from '../Contexts/PageContext';
export default function CodeEditor({props}) {
  const {code, setCode} = useContext(CodeData);
  const handleCodeUpdate = (e)=>{
    const text = e.target.value;
    setCode(prev=>({
        ...prev,
        unformatted: text
    }));
  }

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