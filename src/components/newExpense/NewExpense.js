import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css"
 function NewExpense(props){
     function saveExpenseDataHandler(enteredExpenseData){
         const expenseData={
             ...enteredExpenseData,
             id:Math.random().toString()
         };
        //  console.log(expenseData);
        props.onAddExpense(expenseData);
     }
     return(
         <div className="new-expense">
             <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
         </div>
     )
 }

 export default NewExpense;