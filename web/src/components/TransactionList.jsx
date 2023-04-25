import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/api/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data.transactions));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <div>{transaction.date}</div>
            <div>{transaction.description}</div>
            <div>{transaction.category}</div>
            <div>{transaction.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
