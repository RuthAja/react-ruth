import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
    const expense = [
        {
            id: "l1",
            title: "Lenovo Legion 5",
            amount: "25.000.00",
            date: new Date(30, 8, 2022),
        },
        {
            id: "l2",
            title: "Lenovo Legion 5 PRO",
            amount: "30.000.00",
            date: new Date(30, 8, 2022),
        },
        {
            id: "l3",
            title: "Lenovo Legion 5i",
            amount: "26.000.00",
            date: new Date(30, 8, 2022),
        },
        {
            id: "l4",
            title: "Lenovo Legion 5i PRO",
            amount: "31.000.00",
            date: new Date(30, 8, 2022),
        },
    ];

    return (
        <div>
            <h2>Hai my name is Ruth</h2>
            {expense.map((expense) => {
                return (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                );
            })}
        </div>
    );
};

export default Expenses;
