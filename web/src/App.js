import React from 'react';
import TransactionList from './components/TransactionList';
import TransactionTable from './components/TransactionTable'
import Addform from './components/Addform';

function App() {
  return (
    <div>
      <h1>Mzee Budget</h1>
      <TransactionList />
      <TransactionTable/>
      <Addform/>
    </div>
  );
}

export default App;
