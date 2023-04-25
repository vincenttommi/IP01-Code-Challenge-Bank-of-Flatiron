import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  },[]);

  return (
    
    <div>
      <h2>Transactions</h2>
      <ul>
      {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
