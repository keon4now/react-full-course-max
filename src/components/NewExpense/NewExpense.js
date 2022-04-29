import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//as a first step we want the data from expense form...it needs this info then the app.js needs info from new expense so we are going up ....props can only go from parent to child

const NewExpense = (props) => {
	//name of parameter does not matter ....
	// expense data is from expense form ...pull out key value pairs and add to this object then add a new id key
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData); // from app.js will just log
	};
	return (
		//prop: can name whatever as below...
		// not executed we just point to it...
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};
export default NewExpense;
