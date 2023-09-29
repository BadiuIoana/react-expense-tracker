import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: "JAN", value: 0 },
        { label: "FEB", value: 0 },
        { label: "MAR", value: 0 },
        { label: "APR", value: 0 },
        { label: "MAY", value: 0 },
        { label: "JUN", value: 0 },
        { label: "JUL", value: 0 },
        { label: "AUG", value: 0 },
        { label: "SEPT", value: 0 },
        { label: "OCT", value: 0 },
        { label: "NOV", value: 0 },
        { label: "DEC", value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.expenseDate.getMonth();
        chartDataPoints[expenseMonth].value += expense.expenseAmount;
    }
    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
