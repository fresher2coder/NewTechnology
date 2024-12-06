// Flag to determine if we're editing an existing transaction
let editingIndex = null;

// Handle form submission to add/update transaction (simulating POST/PUT request)
document.getElementById("transactionForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim().toUpperCase();
  const amount = document.getElementById("amount").value.trim();

  if (editingIndex === null) {
    // If not editing, it's an Add transaction (POST)
    addTransaction(name, amount);
  } else {
    // If editing, it's an Update transaction (PUT)
    updateTransaction(editingIndex, { name, amount });
    editingIndex = null; // Reset editing flag
  }

  // Reset the form
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";

  // Reset submit button text to 'Add'
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.textContent = "Add";
});

// Add a new transaction (simulating a POST request)
function addTransaction(name, amount) {
  const transactions = getTransactions();
  const newTransaction = { name, amount };
  transactions.push(newTransaction);
  saveTransactions(transactions);
  displayTransactions();
}

// Simulate getting transactions from localStorage
function getTransactions() {
  const transactions = localStorage.getItem("transactions");
  return transactions ? JSON.parse(transactions) : [];
}

// Save transactions to localStorage
function saveTransactions(transactions) {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Function to render transactions
function displayTransactions() {
  const transactions = getTransactions();
  const transactionsList = document.getElementById("transactionsList");
  transactionsList.innerHTML = ""; // Clear the list

  transactions.forEach((transaction, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${transaction.name}: $${transaction.amount}`;
    const btns = document.createElement("div");
    btns.classList.add("btns");

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTransaction(index);

    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.onclick = () => editTransaction(index);

    btns.appendChild(editButton);
    btns.appendChild(deleteButton);
    listItem.appendChild(btns);
    transactionsList.appendChild(listItem);
  });
}

// Update a transaction (simulating a PUT request)
function updateTransaction(index, updatedTransaction) {
  const transactions = getTransactions();
  transactions[index] = updatedTransaction;
  saveTransactions(transactions);
  displayTransactions();
}

// Delete a transaction (simulating a DELETE request)
function deleteTransaction(index) {
  const transactions = getTransactions();
  transactions.splice(index, 1);
  saveTransactions(transactions);
  displayTransactions();
}

// Edit a transaction (simulating a PUT request)
function editTransaction(index) {
  const transactions = getTransactions();
  const transaction = transactions[index];
  document.getElementById("name").value = transaction.name;
  document.getElementById("amount").value = transaction.amount;

  // Set the editingIndex to the current transaction's index
  editingIndex = index;

  // Change the submit button to 'Update'
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.textContent = "Update";
}

// Clear all transactions (Delete all data from localStorage)
document.getElementById("clearAllButton").addEventListener("click", () => {
  localStorage.removeItem("transactions"); // Remove the transactions from localStorage
  displayTransactions(); // Re-render the list (empty list)
});

// Display transactions on load
window.onload = displayTransactions;
