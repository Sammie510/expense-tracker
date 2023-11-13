import './ExpenseDate.css';
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <h4 className="expense-date__month">{month}</h4>
      <h4 className="expense-date__year">{year}</h4>
      <h2 className="expense-date__day">{day}</h2>
    </div>
  );
};
export default ExpenseDate;
