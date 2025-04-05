// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element
    const ctx = document.getElementById("barChart").getContext("2d");

    // Create the bar chart
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Income",
                    data: [500, 700, 800, 600, 900, 1000, 1100, 950, 850, 750, 650, 800],
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
                {
                    label: "Expenses",
                    data: [400, 500, 600, 450, 700, 800, 850, 750, 650, 550, 500, 600],
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
});