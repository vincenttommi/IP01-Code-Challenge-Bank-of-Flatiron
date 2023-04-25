import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:5000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  },[]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/transactions/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // handle success
        // e.g. remove the deleted transaction from the state
        setTransactions(transactions.filter(transaction => transaction.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td><button onClick={() => handleDelete(transaction.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
