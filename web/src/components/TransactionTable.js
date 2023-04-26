import React, { useState, useEffect } from "react";
import Addform from "./Addform";

const TransactionTable = ({ transactions, onDelete }) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    if (categoryFilter === "") {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(
        transactions.filter((transaction) => {
          return transaction.category === categoryFilter;
        })
      );
    }
  }, [categoryFilter, transactions]);

  const handleChange = (event) => {
    setCategoryFilter(event.target.value);
  };




  const handleDelete = (id) => {
    fetch(`https://my-json-server.typicode.com/vincenttommi/IP01-Code-Challenge-Bank-of-Flatiron/transactions/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        onDelete(id);
      })
      .catch(error => console.error(error));
  };


  return (
    <div>
      <label htmlFor="category">Filter by Category: </label>
      <select id="category" value={categoryFilter} onChange={handleChange}>
        <option value="">All</option>
        <option value="Income">Income</option>
        <option value="Food">Food</option>
        <option value="Fashion">Fashion</option>
        <option value="Gift">Gift</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Housing">Housing</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
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
};

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // simulate fetching data from an API
    const fetchData = async () => {
      const response = await fetch("https://my-json-server.typicode.com/vincenttommi/IP01-Code-Challenge-Bank-of-Flatiron/transactions");
      const data = await response.json();
      setTransactions(data.transactions);
    };
    fetchData();
  }, []);

  return (
    <div>
      
      {transactions.length > 0 ? (
        <TransactionTable transactions={transactions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
