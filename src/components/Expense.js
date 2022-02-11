
import React,{useState} from 'react';
import './expense.css'
import Card from './Card'
import ExpenseDate from './ExpenseDate';

function Expense(props){
    const [title,setTitle] = useState(props.title);
    function clickHandler(){
        setTitle('updated');
    }
    
    return(
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>click here</button>
        </Card>
    )
}

export default Expense;