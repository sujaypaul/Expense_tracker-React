import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    // moved to ExpensesList.js

    // let expensesContent = <p>No expenses found</p>;
    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            {/* {expensesContent} */}
            <ExpensesList items = {filteredExpenses} />
        </Card>
    );
}

export default Expenses;


// {expenses} alternatives =>
//{/* using && trick ... it automatically executes code after && if condition not satisfied */ }
//{/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
            // {filteredExpenses.length > 0 &&
            //     filteredExpenses.map(
            //         expense =>
            //             <ExpenseItem
            //                 key={expense.id}
            //                 title={expense.title}
            //                 amount={expense.amount}
            //                 date={expense.date}
            //             />
            //     )
//            } */}

//{/* using ternary expression */ }
//{/* {filteredExpenses.length === 0 ? <p>No expeses found</p> :
//                (
//                     filteredExpenses.map(
//                         expense =>
//                             <ExpenseItem
//                                 key={expense.id}
//                                 title={expense.title}
//                                 amount={expense.amount}
//                                 date={expense.date}
//                             />
//                     )
//                 )
//             } */}



// {/* without loop */ }
// {/* <ExpenseItem
//                 title={props.items[0].title}
//                 amount={props.items[0].amount}
//                 date={props.items[0].date}
//             />

//             <ExpenseItem
//                 title={props.items[1].title}
//                 amount={props.items[1].amount}
//                 date={props.items[1].date}
//             />

//             <ExpenseItem
//                 title={props.items[2].title}
//                 amount={props.items[2].amount}
//                 date={props.items[2].date}
//             />

//             <ExpenseItem
//                 title={props.items[3].title}
//                 amount={props.items[3].amount}
//                 date={props.items[3].date}
//             /> */}