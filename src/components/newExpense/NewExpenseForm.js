import React,{useState} from "react";
import './NewExpenseForm.css'
 function NewExpenseForm(props){
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };

        // console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
     return(
         <form onSubmit={submitHandler}>
             <div className="new-expense__controls">
                 <div className="new-expense__control">
                     <label>Title</label>
                     <input onChange={titleChangeHandler} value={enteredTitle} type='text'></input>
                 </div>
                 <div className="new-expense__control">
                     <label>Amount</label>
                     <input onChange={amountChangeHandler} value={enteredAmount} type="number" min="0.02" step="0.01"></input>
                 </div>
                 <div className="new-expense__control">
                     <label>Date</label>
                     <input onChange={dateChangeHandler} value={enteredDate} type="date" min="2019-01-01"></input>
                 </div>
             </div>
             <div className="new-expense__actions">
                     <button type="submit">Add Expense</button>
                 </div>
         </form>
     )
 }

 export default NewExpenseForm;