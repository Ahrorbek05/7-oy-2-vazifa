import React from 'react';
import './App.css';
import Loading from './components/Loader/Loading';
import Test from './components/Test/Test';

function App() {
  return (
    <div>
      <h1>Cars information</h1>
      <Test />
      <Loading />
    </div>
  );
}

export default App;
