import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";
import React, { useState } from "react";

function ExpensesList(props) {
    const [deleteID, setDeleteID] = useState("");
    const cancelHandler = (id) => {
        setDeleteID((prevID) => {
            // props.cancelList([id, ...prevID]);
            return [id, ...prevID];
        });
    };
    const cancelList = props.items.filter((ele) => {
        return !deleteID.includes(ele.id);
    });

    if (cancelList.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    }
    return (
        <ul className="expenses-list">
            {cancelList.map((expense) => (
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
