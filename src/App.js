import React, { useState, useEffect } from 'react';
import Tours from './components/tours';
import './App.css';


const url = 'http://localhost:3000/info';

function App() {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try{
    const response = await fetch(url);
      
    const tours = await response.json();
    setTours(tours);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="App">
      <Tours tours={tours} />
    </div>
  );
}

export default App;
