import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesSort from "./ExpensesSort";

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const [sortedState, setSortedState] = useState("ascending-amount");
    const sortChangeHandler = (selectedState) => {
        setSortedState(selectedState);
    };

    // const [deleteID, setDeleteID] = useState("");
    // const cancelHandler = (id) => {
    //     setDeleteID((prevID) => {
    //         return [...id, ...prevID];
    //     });
    // };

    const [deleteID, setDeleteID] = useState("");
    const cancelHandler = (id) => {
        setDeleteID((prevID) => {
            return [id, ...prevID];
        });
    };

    const filteredExpenses = props.items.filter((ele) => {
        if (filteredYear === "None") {
            return ele && !deleteID.includes(ele.id);
        }
        return (
            ele.date.getFullYear().toString() === filteredYear &&
            !deleteID.includes(ele.id)
        );
    });

    const sortedExpenses = filteredExpenses.sort(function (a, b) {
        if (sortedState === "ascending-amount") {
            return a.amount - b.amount;
        } else if (sortedState === "descending-amount") {
            return b.amount - a.amount;
        } else if (sortedState === "Newer") {
            return new Date(b.date) - new Date(a.date);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesSort
                    onChangeSort={sortChangeHandler}
                    selected={sortedState}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList
                    items={sortedExpenses}
                    cancelList={cancelHandler}
                />
            </Card>
        </div>
    );
}

export default Expense;
