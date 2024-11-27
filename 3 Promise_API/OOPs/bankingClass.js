// Base Account class
class Account {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}. Remaining Balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance or invalid amount.");
    }
  }

  checkBalance() {
    console.log(`Account Balance: ${this.balance}`);
  }
}

// Savings Account class
class SavingsAccount extends Account {
  constructor(accountNumber, accountHolder, balance, interestRate) {
    super(accountNumber, accountHolder, balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    console.log(`Interest Earned: ${interest}`);
    return interest;
  }
}

// Current Account class
class CurrentAccount extends Account {
  constructor(accountNumber, accountHolder, balance, overdraftLimit) {
    super(accountNumber, accountHolder, balance);
    this.overdraftLimit = overdraftLimit;
  }

  checkOverdraft() {
    if (this.balance < 0 && Math.abs(this.balance) <= this.overdraftLimit) {
      console.log("Overdraft allowed.");
    } else if (this.balance < 0) {
      console.log("Overdraft limit exceeded!");
    } else {
      console.log("No overdraft.");
    }
  }
}

// Branch class
class Branch {
  constructor(branchName, branchCode) {
    this.branchName = branchName;
    this.branchCode = branchCode;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
    console.log(
      `Account added for ${account.accountHolder} in branch ${this.branchName}.`
    );
  }

  getAccounts() {
    return this.accounts;
  }
}

// Bank class
class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }

  addBranch(branch) {
    this.branches.push(branch);
    console.log(`Branch ${branch.branchName} added to ${this.bankName}.`);
  }

  getBranches() {
    return this.branches;
  }
}

// Example Usage

// Create a bank
const myBank = new Bank("Darwin Bank");

// Add branches
const branch1 = new Branch("Downtown", "001");
const branch2 = new Branch("Uptown", "002");
myBank.addBranch(branch1);
myBank.addBranch(branch2);

// Create accounts
const savingsAccount = new SavingsAccount(101, "Dineshkumar", 1000, 5);
const currentAccount = new CurrentAccount(102, "Divya Dineshkumar", 500, 1000);

// Add accounts to branches
branch1.addAccount(savingsAccount);
branch2.addAccount(currentAccount);

// Test account functionality
savingsAccount.deposit(500);
savingsAccount.calculateInterest();
savingsAccount.checkBalance();

currentAccount.withdraw(700);
currentAccount.checkOverdraft();
