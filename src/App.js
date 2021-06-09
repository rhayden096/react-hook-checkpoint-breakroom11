import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
 

  
    
    const [data, setData] = useState([])
    const fetchURL = "http://18.224.200.47"
    const getData = () => {
    return fetch(`${fetchURL}/products/list`)
        .then((res) => res.json())}
  
    useEffect(() => {
      getData().then((data) => {console.log(data); setData(data)})
    }, [])
    
    
    const [showText, setShowText] = useState(false);
    const onClick = () => setShowText(true);
    const Text = () => <div>{`${data[1]}`}</div>;
  
  
    
  
  
  
    return (
      <div>
        Product List
        {data?.map((items) => 
      
          <ul>
          
            <ln>
              
              {items.name} 
              </ln>
              <div>
      <button onClick={onClick}>Click me</button>
      { showText ? <Text /> : null}
    </div>
          </ul>
        )}
       
     

      </div>
    )
    
  }


export default App;
