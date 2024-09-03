class Transaction {
    constructor(fromClient, toClient, amount) {
        this.fromClient = fromClient;
        this.toClient = toClient;
        this.amount = amount;

    }
    calculateCommission() {
        return this.amount * 0.05;
    }
    calculate() {
        let commissionAmount = this.calculateCommission();
        return {
            fromClient: this.fromClient,
            toClient: this.toClient,
            amount: this.amount,
            commissionAmount: commissionAmount
        }
    }
}

let user = new Transaction("Mirkamil", "Nurlan", 5000)
let result = user.calculate();
console.log(result);
