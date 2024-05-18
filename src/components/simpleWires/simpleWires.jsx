import React, { useEffect, useState } from 'react';

const SimpleWires = () => {
    const [wireCount, setWireCount] = useState('');
    const [result, setResult] = useState('');
  
    const handleWireCountChange = (event) => {
      setWireCount(event.target.value);
      console.log(wireCount)
    };
  

    useEffect(() => {
        if (wireCount === '') {
            setResult('Please enter the number of wires.');
            return;
          }
      
          const numWires = parseInt(wireCount);
      
          if (numWires === 3) {
            setResult("If no red wires, cut the second wire. If first two wires are blue, cut the second wire. Otherwise, cut the last wire.");
          } else if (numWires === 4) {
            setResult("If more than one red wire and last digit of serial number is odd, cut the last red wire. Otherwise, if last wire is yellow and no red wires, cut the first wire. Otherwise, if exactly one blue wire, cut the first wire. Otherwise, if more than one yellow wire, cut the last wire. Otherwise, cut the second wire.");
          } else if (numWires === 5) {
            setResult("If last wire is black and last digit of serial number is odd, cut the fourth wire. Otherwise, if exactly one red wire and more than one yellow wire, cut the first wire. Otherwise, if no black wires, cut the second wire. Otherwise, cut the first wire.");
          } else if (numWires === 6) {
            setResult("If no yellow wires and last digit of serial number is odd, cut the third wire. Otherwise, if exactly one yellow wire and more than one white wire, cut the fourth wire. Otherwise, if no red wires, cut the last wire. Otherwise, cut the fourth wire.");
          } else {
            setResult('Invalid number of wires. Please enter 3, 4, 5, or 6.');
          }
    }, [wireCount]);
  
    return (
      <div>
        <form>
          <label>
            Enter the number of wires:
            <input type="number" value={wireCount} onChange={handleWireCountChange} />
          </label>
        </form>
        {result && <div>{result}</div>}
      </div>
    );
  }

export default SimpleWires;