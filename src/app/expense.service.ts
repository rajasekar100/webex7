import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
  getExpense(){
    return [
      { serialNo: 1, date: '4/10/2023', reason: 'Groceries', amount: 50, debitCredit: 'Debit' },
    { serialNo: 2, date: '4/11/2023', reason: 'Gas', amount: 30, debitCredit: 'Debit' },
    { serialNo: 3, date: '4/12/2023', reason: 'Salary', amount: 1000, debitCredit: 'Credit' }
    ];
  }
}


