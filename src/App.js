import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
    {
        id: 1,
        expenseDate: new Date(2023, 2, 2),
        expenseTitle: "Rent",
        expenseAmount: 600,
    },
    {
        id: 2,
        expenseDate: new Date(2023, 2, 5),
        expenseTitle: "Groceries",
        expenseAmount: 400,
    },
    {
        id: 3,
        expenseDate: new Date(2023, 2, 15),
        expenseTitle: "Invoices",
        expenseAmount: 200,
    },
    {
        id: 4,
        expenseDate: new Date(2023, 3, 30),
        expenseTitle: "Shopping",
        expenseAmount: 100,
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <h1 style={{ color: "#ffffff", textAlign: "center" }}>
                Expense Tracker
            </h1>
            <NewExpense onAddedExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
