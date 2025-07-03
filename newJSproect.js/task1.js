class Account {
    #balance;
    constructor(accountNumber,accountHolder,balance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.#balance = balance;

    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("amount must be valid");
        }
        this.#balance += amount;
        console.log("your deposit was done");
        return this.#balance;

    }
    withdraw(amount) {
        if (this.#balance - amount < 0) {
            throw new Error("you cant do withdraw") 
        } 
        this.#balance -= amount;
        console.log("you have done a withdraw");
return this.#balance;
    }
    getBalance() {
        return this.#balance;
    }
}
class Bank {
    constructor() {
        this.accounts = []
    }
    addAccount(account) {
        console.log("succefully pushed")
        this.accounts.push(account);
        

    }
    findAccount(accountNumber) {
        for (let i = 0; i < this.accounts.length; ++i) {
            if (accountNumber === this.accounts[i].accountNumber) {
                console.log("Account found.");
                return this.accounts[i];
            }
        }
        throw new Error("Account not found.");
    }

    getTotalBalance() {
        let balance=0;
        for(let i = 0; i < this.accounts.length; ++i) {
           balance += this.accounts[i].getBalance();

        }
        return balance;
    }
}
const bank = new Bank();

const user = new Account("0503", "Erik", 222);
console.log(user.deposit(555));  // Deposit money
console.log("User Balance:", user.getBalance());  // Show user's balance

bank.addAccount(user);  // Add user to bank

//  bank methods
const found = bank.findAccount("0503");
console.log("Found Account Holder:", found.accountHolder);

console.log("Total Balance in Bank:", bank.getTotalBalance());
const user1 = new Account("0606", "Arman", 251);
bank.addAccount(user1)
console.log(bank.getTotalBalance())
console.log(user.deposit(213))
