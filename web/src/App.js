import React, { useState, useEffect } from 'react';
import TransactionFilter from './components/Transaction';
import TransactionList from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setFilteredTransactions(data.transactions);
        setCategories(Array.from(new Set(data.transactions.map((transaction) => transaction.category))));
      })
      .catch((error) => console.error(error));
  }, []);

  function handleCategoryChange(category) {
    if (category === '') {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(transactions.filter((transaction) => transaction.category === category));
    }
  }

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionFilter categories={categories} onChange={handleCategoryChange} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;
