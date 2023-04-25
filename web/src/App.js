import React from 'react';
import TransactionList from './components/TransactionList';
import TransactionTable from './components/TransactionTable'

import './App.css';
import Addform from './components/Addform';

function App() {
  return (
    <div>
      <h1>Mzee Budget</h1>
      <Addform />
      <TransactionList />
      <TransactionTable/>
      <addform/>
    </div>
  );
}

export default App;
