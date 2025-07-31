class MessageService {
  send(message) {
    throw new Error("send() must be implemented.");
  }
}

class EmailService extends MessageService {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

class MessageSender {
  constructor(service) {
    this.service = service;
  }

  sendMessage(message) {
    this.service.send(message);
  }
}

const emailService = new EmailService();
const sender = new MessageSender(emailService);
sender.sendMessage("Hello, world!");
