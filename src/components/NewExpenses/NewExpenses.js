import React,{useState} from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) =>{

    const [isEditing,setEditing] = useState(false);

    const saveExpenseHandler = (enteredExpenseData)=>{
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData);
        setEditing(false)
    };

    function EditingHandler () {
        setEditing(true)
    }

    function stopEditingHandler () {
        setEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={EditingHandler}>Add Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel = {stopEditingHandler} />}
        </div>
    )
}

export default NewExpenses;