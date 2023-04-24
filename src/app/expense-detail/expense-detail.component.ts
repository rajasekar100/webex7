import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-detail',
  template: `
    <h2 >{{parent}}</h2>
<div class="container">
  <label>Enter a new expense:</label>
  <input type="text" [(ngModel)]="newExpense.reason">
  <label>Amount:</label>
  <input type="number" [(ngModel)]="newExpense.amount">
  <label>Debit/Credit:</label>
  <select [(ngModel)]="newExpense.debitCredit">
    <option value="debit">Debit</option>
    <option value="credit">Credit</option>
  </select>
  <button (click)="onAddExpense()" (click)="fire()">Add Expense</button>
</div>

<div class="search-container" >
  <label [title]="'Expense Details'">Search expenses:</label>
  <input type="text" [(ngModel)]="searchTerm">
  <ul>
    <li *ngFor="let i of filteredExpenses">{{i.serialNo}}. {{i.date}}->{{i.reason}}->{{i.amount}}->{{i.debitCredit}}</li>
  </ul>
</div>
  `,
styleUrls: ['./expense-detail.component.css']

})
export class ExpenseDetailComponent implements OnInit {
  public exp: { serialNo: number; date: string; reason: string; amount: number; debitCredit: string }[] = [];
  public newExpense = { reason: '', amount: 0, debitCredit: 'debit' };
  public searchTerm: string = '';
  If=true;
  constructor(private e: ExpenseService) { }

  ngOnInit() {
    this.exp = this.e.getExpense();
  }

  onAddExpense() {
    const lastSerialNo = this.exp[this.exp.length - 1].serialNo;
    const newSerialNo = lastSerialNo + 1;
    const newDate = new Date().toLocaleDateString();
    this.exp.push({
      serialNo: newSerialNo,
      date: newDate,
      reason: this.newExpense.reason,
      amount: this.newExpense.amount,
      debitCredit: this.newExpense.debitCredit
    });
    this.newExpense.reason = '';
    this.newExpense.amount = 0;
    this.newExpense.debitCredit = 'debit';
  }

  get filteredExpenses() {
    return this.exp.filter(e => e.reason.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
 
  @Input() public parent:any;

  @Output() public tx = new EventEmitter();
fire(){
this.tx.emit('Add Expense Successfully');
}
}
