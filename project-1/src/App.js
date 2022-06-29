// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputlist(event.target.value)
  }

    const d =()=> {
      setItems((oldItems) => {
        return [...oldItems, inputlist]

      });
      inputlist("");
    };
    

  

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Type Text Here" onChange={itemEvent} />
        <button onClick={d}  >+</button>
        <ol>
          {/* <li>
              {inputlist}
            </li> */}
          {
            items.map((itemvalue) => {
              return <li>{itemvalue}</li>
            })
          }
        </ol>
  
  
      </div>
  
    </div>
   
  
  
  
  )
}


export default App;
