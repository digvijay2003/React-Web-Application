import React,{useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
    const [filteredyear,setFilteredYear] = useState('2020');

    const FilterchangeHandler = (selectedyear) =>{
        setFilteredYear(selectedyear);
        console.log(selectedyear);
    }

    const filterExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredyear;
    });


    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredyear} onChangeFilter={FilterchangeHandler}/>
            <ExpensesChart expenses = {filterExpenses} />
            <ExpensesList items = {filterExpenses} />
        </Card>
        </div>
    )
}

export default Expenses;