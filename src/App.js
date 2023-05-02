import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { double } from './networking/dreams';

const App = () => {
  const [value, setValue] = useState(0);
  const [serverResponse, setServerResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await double({ number: value });
      setServerResponse(response);
    } catch(err) {
      setServerResponse(`oopsie daisy, ${err}`);
    }

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label>
            Number:
            <input type="number" name="number" value={value} onChange={(e) => setValue(e.target.value)}/>
          </label>
          <input type="submit" value="Double" />
        </form>
        { serverResponse &&

          <div> {serverResponse} </div>
        
        }
      </header>
    </div>
  );
}

export default App;
