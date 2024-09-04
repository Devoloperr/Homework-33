class Transaction {
    constructor(fromClient, toClient, amount) {
        this.fromClient = fromClient;
        this.toClient = toClient;
        this.amount = amount;

    }
    calculateCommission() {
        return this.amount * 0.05;
    }
}

let user = new Transaction("Mirkamil", "Nurlan", 5000)
let result = user.calculateCommission();
console.log(result);
