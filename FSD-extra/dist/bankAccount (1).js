"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayBalance() {
        console.log("Balance =", this.balance);
    }
}
let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
account.displayBalance();
