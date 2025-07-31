class PaymentMethod {
  pay(amount) {
    throw new Error("pay() method must be implemented.");
  }
}

class CreditCard extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ${amount} with Credit Card.`);
  }
}

class PayPal extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ${amount} with PayPal.`);
  }
}

class Crypto extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ${amount} with Crypto.`);
  }
}

class PaymentProcessor {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  process(amount) {
    this.paymentMethod.pay(amount);
  }
}

const credit = new CreditCard();
const paypal = new PayPal();
const crypto = new Crypto();

const processor1 = new PaymentProcessor(credit);
processor1.process(100);

const processor2 = new PaymentProcessor(paypal);
processor2.process(150);

const processor3 = new PaymentProcessor(crypto);
processor3.process(200);



