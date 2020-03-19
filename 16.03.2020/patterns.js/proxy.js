/**
 * Заместитель — это структурный паттерн проектирования, который позволяет подставлять вместо
 * реальных объектов специальные объекты-заменители. 
 * Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать что-то до или после передачи вызова оригиналу.
 * 
 * 
 * Адаптер предоставляет классу альтернативный интерфейс.
 * Декоратор предоставляет расширенный интерфейс.
 * Заместитель предоставляет тот же интерфейс.
 * 
 * пример
 * 
 * у нас есть БД.
 * есть неколько обхектов, которые шлю запросы на получение данных (статичных данных, например расстояние до луны).
 * мы можем в прокси написать логигу, что если идет запрос на расстояние до луны, то запрос в БД не делаем, о отдаенм данные из хэштаблицы
 */

class BankAccounts {
  add(bankAccountData) {
  }
  find(bankAccount) {
  }
  getList() {
  }
};



// creating the proxy
class BankAccountsProxy {
  bankAccounts = new BankAccounts();

  addBankAccount(bankAccountData) {
      // some funtionality before calling the add method on BankAccounts
      return this.bankAccounts.add();
  }

  findBankAccount(bankAccount) {
      // some funtionality before calling the find method on BankAccounts
      return this.carList.find();
  }
  
  getBankAccountsList() {
      // some funtionality before calling the getList method on BankAccounts
      return this.carList.getList();
  }
};