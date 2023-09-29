import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-EN", { month: "long" });
    const day = props.date.toLocaleString("en-EN", { day: "2-digit" });
    const year = props.date.getFullYear();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{day}</div>
            <div className='expense-date__year'>{month}</div>
            <div className='expense-date__day'>{year}</div>
        </div>
    );
}

export default ExpenseDate;
