import React,{useState} from 'react';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
function App() {
  const [isVisiable,setVisiable]
  return (
    <div className="App">
      <FunctionalComponent/>
      <ClassComponent/>
    </div>
  );
}

export default App;
