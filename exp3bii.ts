class BankAccount {

    public accountHolder: string;

    private balance: number;
    private pin: number;

    protected rewardPoints: number = 0;

    constructor(name: string, balance: number, pin: number) {
        this.accountHolder = name;
        this.balance = balance;
        this.pin = pin;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`₹${amount} deposited successfully.`);
        console.log(`Current Balance: ₹${this.balance}`);
    }

    private verifyPin(pin: number): boolean {
        return this.pin === pin;
    }
}

class PremiumAccount extends BankAccount {

    public addRewards(): void {
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