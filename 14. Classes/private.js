class Account {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new Account();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());

// account.deposit(-10); // Invalid amount
// account.withdraw(-10); // Invalid amount
// account.withdraw(150); // Insufficient balance
