import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import CodeEditor from './components/CodeEditor/CodeEditor';
import CodeWindow from './components/CodeWindow/CodeWindow';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row g-0'>
        <div className='col-6 left-pane'>
        <CodeEditor/>
        </div>
        <div className='col-6 right-pane'>
          <CodeWindow/>
          </div>
      </div>
    </div>
  );
}

export default App;
