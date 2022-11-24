import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDelete from "./ExpenseDelete";
function ExpenseItems(props) {
    const cancelHandler = (id) => {
        return props.cancel(id);
    };
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                    <ExpenseDelete id={props.id} render={cancelHandler} />
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItems;
