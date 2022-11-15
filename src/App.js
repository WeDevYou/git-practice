import React from 'react';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
     <Button onClick={onclick} text='Get users' />
    </div>
  );
}

export default App;
