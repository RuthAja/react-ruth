import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const day = props.date.toLocaleString("id-ID", {
        day: "numeric",
    }); /* weekday bisa diganti dengan day tapi hanya bisa numeric */
    const month = props.date.toLocaleString("id-ID", { month: "long" });
    const year = props.date.toLocaleString("id-ID", { year: "numeric" });
    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;
