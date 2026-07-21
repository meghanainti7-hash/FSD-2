"use strict";
class FixedDeposit {
    // Properties (Fields)
    customerName;
    principalAmount;
    interestRate; // Annual rate in %
    tenureYears;
    // Constructor Implementation
    constructor(name, amount, rate, years) {
        this.customerName = name;
        this.principalAmount = amount;
        // Default values
        this.interestRate = rate ?? 6.5;
        this.tenureYears = years ?? 1;
    }
    // Method to calculate maturity amount
    calculateMaturity() {
        const interest = (this.principalAmount * this.interestRate * this.tenureYears) / 100;
        return this.principalAmount + interest;
    }
    // Method to display details
    displayDetails() {
        console.log("----- FD Receipt -----");
        console.log(`Customer: ${this.customerName}`);
        console.log(`Principal: ₹${this.principalAmount}`);
        console.log(`Rate: ${this.interestRate}%`);
        console.log(`Tenure: ${this.tenureYears} year(s)`);
        console.log(`Maturity Amount: ₹${this.calculateMaturity()}`);
        console.log("----------------------\n");
    }
}
// Scenario A - Standard Fixed Deposit
const standardFD = new FixedDeposit("Rajesh Kumar", 50000);
// Scenario B - Senior Citizen Fixed Deposit
const seniorCitizenFD = new FixedDeposit("Anjali Sharma", 100000, 7.5, 3);
// Display Details
standardFD.displayDetails();
seniorCitizenFD.displayDetails();
// Update Principal Amount
seniorCitizenFD.principalAmount = 110000;
// Display Updated Maturity Amount
console.log(`Updated Maturity for Anjali: ₹${seniorCitizenFD.calculateMaturity()}`);
