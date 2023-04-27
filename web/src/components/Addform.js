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


console.log(newtransaction);

fetch("https://react-40re.onrender.com/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Accept':'application/json'
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
           required
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
           required
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
         
      <label>
      Category:
        <input
           required
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
         
        />
      </label>

      <label>
      Amount
        <input
          required
          type="text"
          value={amount}
          onChange={(e) => SetAmount(e.target.value)}
         
        />
      </label>
      <button  id='tn' required  type="submit">Submit</button>
    </form>

  )
}

export default Addform;