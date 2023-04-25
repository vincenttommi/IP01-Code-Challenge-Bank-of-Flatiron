import React from 'react'

const Transaction = (props) => {

    const { id, date, description, category, amount } = props.transaction;
  return (
    <div className="Name">
        <tr>
      <td>{id}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>

    </div>
  )
}

export default Transaction;