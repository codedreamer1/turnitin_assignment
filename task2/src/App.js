import DogComponent from './components/dog';
import React from "react"
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="dog">
        <DogComponent />
      </div>
    </div>
  );
}

export default App;
