import { addExpense } from "./api.js";

const form = document.getElementById("expenseForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const expense = {
    title: document.getElementById("title").value,
    amount: Number(document.getElementById("amount").value),
    category: document.getElementById("category").value
  };

  await addExpense(expense);
  alert("Expense added successfully ✅");

  form.reset();
});
