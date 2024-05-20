import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from './Homepage/homepage';
// import DataFile from '../Data';

function App() {
  const [data, setData] = useState<any[]>([]);

  
  

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
