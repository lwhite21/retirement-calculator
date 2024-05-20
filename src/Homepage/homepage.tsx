import React from "react";
import './homepage.css';
import { useEffect, useState, createContext } from "react";
import Inputs from "./Inputs/inputs";

export const DataContext = createContext({});

const Homepage = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.txt');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const text = await response.text();
        // Split the text into an array of lines
        const lines = text.split('\n');
        // Filter out any empty lines
        const filteredLines = [];
        for (let i = 0; i < lines.length; i++) {
          const lineValues = lines[i].slice(0, -2).split(',');
          if (lineValues.length === 3) {
            filteredLines.push({
              date: lineValues[0],
              marketChange: lineValues[1],
              inflation: lineValues[2],
            
            });
          }
        }
        console.log(filteredLines);
        setData(filteredLines);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      <div className="homepage-container">
        <h1>Retirement Calc</h1>
        <Inputs />
      </div>
    </DataContext.Provider>
  );
};

export default Homepage;