const API_URL = "https://expense-backend-0ttl.onrender.com/api/expenses";

// Add expense
export async function addExpense(expense) {
  const response = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expense)
  });

  return response.json();
}

// Get all expenses
export async function getExpenses() {
  const response = await fetch(API_URL);
  return response.json();
}
