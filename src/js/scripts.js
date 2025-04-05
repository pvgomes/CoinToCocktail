// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element
    const ctx = document.getElementById("barChart").getContext("2d");

    // Create the bar chart
    const barChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Income",
                    data: [], // Will be populated dynamically
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
                {
                    label: "Expenses",
                    data: [], // Will be populated dynamically
                    backgroundColor: "rgba(255, 99, 132, 0.6)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Monthly Income vs Expenses",
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Function to update chart data
    function updateChartData() {
        const incomeData = Array.from({ length: 12 }, (_, i) => {
            const incomeInput = document.getElementById(`income${i + 1}`);
            return incomeInput ? parseFloat(incomeInput.value) || 0 : 0;
        });

        const expensesData = Array.from({ length: 12 }, (_, i) => {
            const expensesInput = document.getElementById(`expenses${i + 1}`);
            return expensesInput ? parseFloat(expensesInput.value) || 0 : 0;
        });

        // Update chart datasets
        barChart.data.datasets[0].data = incomeData;
        barChart.data.datasets[1].data = expensesData;

        // Refresh the chart
        barChart.update();
    }

    // Update chart data on page load
    updateChartData();

    // Optional: Add an event listener to update the chart when inputs change
    document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("input", updateChartData);
    });
});