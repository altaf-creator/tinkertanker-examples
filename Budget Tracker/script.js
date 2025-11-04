const budgetForm = document.getElementById('budget-form');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');

let expenses = [];

budgetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);

    if (name && amount > 0) {
        const expense = { name, amount };
        expenses.push(expense);
        updateUI();
        expenseName.value = '';
        expenseAmount.value = '';
    }
});

function updateUI() {
    // Update Expense List
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            ${expense.name} - $${expense.amount.toFixed(2)}
            <button onclick="deleteExpense(${index})">&times;</button>
        `;
        expenseList.appendChild(li);
    });

    // Update Chart
    updateChart();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}

// Chart.js
let expenseChart;

function updateChart() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    const labels = expenses.map(exp => exp.name);
    const data = expenses.map(exp => exp.amount);

    if (expenseChart) {
        expenseChart.data.labels = labels;
        expenseChart.data.datasets[0].data = data;
        expenseChart.update();
    } else {
        expenseChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Expenses',
                    data: data,
                    backgroundColor: [
                        '#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8',
                        '#6f42c1', '#fd7e14', '#20c997', '#6610f2', '#e83e8c'
                    ],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.raw.toFixed(2)}`;
                            }
                        }
                    }
                }
            }
        });
    }
}
