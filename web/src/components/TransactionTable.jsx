import React from 'react'

const TransactionTable = () => {

    const { transactions } = props;
  return (
    <div className="className">
<table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>



    </div>
  )
}

export default TransactionTable;