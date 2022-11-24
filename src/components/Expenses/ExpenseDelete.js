import "./ExpenseDelete.css";

function ExpenseDelete(props) {
    const deleteItemHandler = (event) => {
        props.render(event.target.value);
    };
    return (
        <button
            className="expense-item__delete"
            onClick={deleteItemHandler}
            value={props.id}
        >
            Delete
        </button>
    );
}

export default ExpenseDelete;
