import React, { useState } from 'react'

const Addform = () => {

const[date, setDate] = useState("");
const[description, setDescription]=useState(""); 
const[category, setCategory]=useState("");
const[amount,SetAmount]=useState("");

const handleSubmit = (e) =>{

e.preventDefault();
const newtransaction = {


    date,
    description,
    category,
    amount,
};




fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newtransaction)
    })
      .then(res => res.json())
      .then(() => {
        console.log("New Transaction added");
        setDate("");
        setDescription("");
        setCategory("");
        SetAmount("");
      })
      .catch(error => console.error(error));
  }




  return (
<form onSubmit={handleSubmit} className="transaction-form">
      <label>
        Date:
        <input
          type="text"
          value={date}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
        />
      </label>

      <label>
      Category:
        <input
          type="text"
          value={category}
         
        />
      </label>

      <label>
      Amount
        <input
          type="text"
          value={amount}
         
        />
      </label>
      <button type="submit">Submit</button>
    </form>

  )
}

export default Addform;