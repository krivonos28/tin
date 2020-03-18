/**
 * Команда — это поведенческий паттерн проектирования, который превращает запросы
 * в объекты, позволяя передавать их как аргументы при вызове методов,
 * ставить запросы в очередь, логировать их, а также поддерживать отмену операций.
 * 
 * каждая команда представлена в виде класса с общим для всех классао команд инетфейсом
 * 
 * напрме у нас есть банк.
 * 
 * создаем два класса операций, withdorw и income 
 * 
 * в классе Банк, создаем эти объекты и вызывает общий для них метод execute, в котором описана нужна логика
 * 
 * 
 */

 // представление операции в виде объекта

class AccountCommand {
  constructor(account, amount){
    this.account = account;
    this.amount = amount;
  }
  execute() {
    throw new Error('Command is not implemented');
  }
}

class Withdraw extends AccountCommand {
  execute() {
    this.account.balance -= this.amount;
  }
}

class Income extends AccountCommand {
  execute() {
    this.account.balance -= this.amount;
  }
}

class BankAccount { // Reciver 
  constructor(name){
    this.name = name;
    this.balance = 0;
  }
}

class Bank { // Invocker (То место из которого идут вызовы к командам
  constructor(){
    this.commands = [];
  }
  operation(account, amount) {
    const Command = amount < 0 ? Withdraw : Income;
    const command = new Command(account, Math.abs(amount));
    command.execute();
    this.commands.push(command);
  }
  showOperations() {
    const output = [];
    for (const command of this.commands) {
      output.push({
        operation: command.constructor.name,
        accoutn: command.account.name,
        amount: command.ammount,
      })
    }
    console.table(output);
  }
}

// Usage

const bank = new Bank();
const account1 = new BankAccount('Marcus Aurelius');
bank.operation(account1, 1000);
bank.operation(account1, -50);
const account2 = new BankAccount('Antonius Pius');
bank.operation(account2, 500);
bank.operation(account2, -100);
bank.operation(account2, 150);

bank.showOperations();
console.table([account1, account2]);