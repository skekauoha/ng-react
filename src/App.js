import React, {useState} from 'react';
import './App.scss';

import Nav from './nav/nav';
import Dashboard from './dashboard/dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
