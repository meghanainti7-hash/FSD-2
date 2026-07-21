"use strict";
class BankAccount {
    accountHolder;
    balance;
    pin;
    rewardPoints = 0;
    constructor(name, balance, pin) {
        this.accountHolder = name;
        this.balance = balance;
        this.pin = pin;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`₹${amount} deposited successfully.`);
        console.log(`Current Balance: ₹${this.balance}`);
    }
    verifyPin(pin) {
        return this.pin === pin;
    }
}
class PremiumAccount extends BankAccount {
    addRewards() {
        this.rewardPoints += 50;
        console.log(`Reward Points: ${this.rewardPoints}`);
    }
}
// Execution
const account = new BankAccount("Tanuja", 10000, 1234);
console.log(`Welcome ${account.accountHolder}`);
account.deposit(2000);
const premium = new PremiumAccount("Tanuja", 10000, 1234);
premium.addRewards();
