import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-description">
        <h1 className="expense-title">{props.title}</h1>
        <h4 className="expense-amount">${props.amount}</h4>
      </div>
    </div>
  );
};
export default ExpenseItem;
