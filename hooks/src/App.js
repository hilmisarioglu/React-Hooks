import React,{useState} from 'react';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
function App() {
  const [isVisiable,setVisiable] = useState(true)
  const toggle = () => {
    setVisiable(!isVisiable)
  }
  return (
    <div className="App">
      <button onClick={toggle}>Toggle</button>
      {true &&<ClassComponent/> }
      {isVisiable ? <FunctionalComponent/> : null}
    </div>
  );
}

export default App;
