import React from 'react';
import TransactionList from './components/TransactionList';
import TransactionTable from './components/TransactionTable'

function App() {
  return (
    <div>
      <h1>Mzee Budget</h1>
      <TransactionList />
      <TransactionTable/>
      <addform/>
    </div>
  );
}

export default App;
