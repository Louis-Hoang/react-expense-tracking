import "./ExpensesSort.css";

function ExpensesSort(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeSort(event.target.value);
    };
    return (
        <div className="expenses-sort">
            <div className="expenses-sort__control">
                <label>Sort by</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="ascending-amount">
                        Amount: Low to High
                    </option>
                    <option value="descending-amount">
                        Amount: High to Low
                    </option>
                    <option value="Newer">Date Added: Newer</option>
                    <option value="Older">Date Added: Older</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesSort;
