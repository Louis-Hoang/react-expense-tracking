import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";
// import React, { useState } from "react";

function ExpensesList(props) {
    const cancelHandler = (id) => {
        props.cancelList(id);
    };
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    }
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <div>
                    <ExpenseItems
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        id={expense.id}
                        cancel={cancelHandler}
                    />
                </div>
            ))}
        </ul>
    );
}

export default ExpensesList;
