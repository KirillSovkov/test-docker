import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      await axios.get('http://localhost:5000/')
      .then((res) => {
        setData(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{margin: '0 auto', width: '400px', border: '1px solid white'}}>
      {data.map((item) => {
        return (
          <h4 key={item.id}>{item.title}</h4>
        )
      })}
    </div>
  )
}

export default App
