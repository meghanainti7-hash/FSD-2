class FixedDeposit {

    // Properties (Fields)
    public customerName: string;
    public principalAmount: number;
    public interestRate: number; // Annual rate in %
    public tenureYears: number;

    // Constructor Overloading

    // Signature 1: Standard FD
    constructor(name: string, amount: number);

    // Signature 2: Custom FD
    constructor(name: string, amount: number, rate: number, years: number);

    // Constructor Implementation
    constructor(name: string, amount: number, rate?: number, years?: number) {
        this.customerName = name;
        this.principalAmount = amount;

        // Default values
        this.interestRate = rate ?? 6.5;
        this.tenureYears = years ?? 1;
    }

    // Method to calculate maturity amount
    public calculateMaturity(): number {
        const interest =
            (this.principalAmount * this.interestRate * this.tenureYears) / 100;

        return this.principalAmount + interest;
    }

    // Method to display details
    public displayDetails(): void {
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
console.log(
    `Updated Maturity for Anjali: ₹${seniorCitizenFD.calculateMaturity()}`
);