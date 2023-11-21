import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const changeTitleHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const changeAmountHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const changeDateHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        
       const newDay = +enteredDate.slice(8) + 1;
       const correctDate = enteredDate.slice(0, 8) + newDay;

        event.preventDefault(); 
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(correctDate)
        }
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label className="">Title</label>
                    <input type="text" value={enteredTitle} onChange={changeTitleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label className="">Amount</label>
                    <input type="number" min="1" step="1" value={enteredAmount} onChange={changeAmountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label className="">Date</label>
                    <input type="date" min="2022-01-31" max="2024-01-31" value={enteredDate} onChange={changeDateHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;