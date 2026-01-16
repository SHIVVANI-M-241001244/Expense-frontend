// EXPENSE PIE CHART
const expenseCtx = document.getElementById("expenseChart");

new Chart(expenseCtx, {
  type: "doughnut",
  data: {
    labels: ["Food", "Transport", "Shopping", "Bills", "Health"],
    datasets: [
      {
        data: [4500, 2800, 3200, 1800, 940],
        backgroundColor: [
          "#4f7cff",
          "#22c55e",
          "#f472b6",
          "#facc15",
          "#60a5fa"
        ],
        borderWidth: 0
      }
    ]
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
});

// INCOME VS EXPENSE LINE CHART
const lineCtx = document.getElementById("lineChart");

new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [20000, 22000, 21000, 24000, 23000, 24500],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.1)",
        tension: 0.4,
        fill: true
      },
      {
        label: "Expenses",
        data: [12000, 14000, 13500, 15000, 14500, 13240],
        borderColor: "#f43f5e",
        backgroundColor: "rgba(244,63,94,0.1)",
        tension: 0.4,
        fill: true
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        position: "bottom"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
