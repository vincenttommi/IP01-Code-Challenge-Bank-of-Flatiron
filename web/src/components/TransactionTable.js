import React, { useState, useEffect } from "react";
import Addform from "./Addform";

const TransactionTable = ({ transactions }) => {
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
      const response = await fetch("transactions.json");
      const data = await response.json();
      setTransactions(data.transactions);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      {transactions.length > 0 ? (
        <TransactionTable transactions={transactions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
