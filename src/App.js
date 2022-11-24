import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const init_expenses = [
    {
        id: "e1",
        title: "Grocery",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "Fixing Car",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "PS5",
        amount: 499.5,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "Ikea Collection",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(init_expenses);
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expense items={expenses} />
        </div>
    );
};

export default App;
