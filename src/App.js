import React, { useContext, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import CodeEditor from './components/CodeEditor/CodeEditor';
import CodeWindow from './components/CodeWindow/CodeWindow';
import AlertModal from './components/Modals/AlertModal/AlertModal';
import { CodeData } from './components/Contexts/PageContext';


function App() {
  const { setCode } = useContext(CodeData);
  useEffect(() => {
    const language = localStorage.getItem('language') || '';
    setCode((prev) => ({
      ...prev,
      language: language
    }));
  }, [setCode]);
  return (
    <div className="App">
      <AlertModal />
      <Navbar />
      <div className='pane-wrapper flex-column flex-md-row'>
        <div className='col-12 col-md-6'>
          <CodeEditor />
        </div>
        <div className='col-12 col-md-6'>
          <CodeWindow />
        </div>
      </div>
    </div>
  );
}

export default App;
