import Expense from "./Expense";
import Card from './Card'
import './expense.css'

function ExpenseData(props) {
    return (
        <Card className="expenses">

            <Expense title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}></Expense>
            <Expense title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}></Expense>
            <Expense title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}></Expense>
            <Expense title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date}></Expense>

        </Card>

    )
}

export default ExpenseData;