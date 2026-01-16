import { getExpenses } from "./api.js";

const expenseList = document.getElementById("expenseList");

async function loadExpenses() {
  const expenses = await getExpenses();

  expenseList.innerHTML = "";

  expenses.slice(0, 5).forEach(exp => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${exp.title}</strong> — ₹${exp.amount}
      <span style="color:#6b7280">(${exp.category})</span>
    `;
    expenseList.appendChild(li);
  });
}

loadExpenses();
