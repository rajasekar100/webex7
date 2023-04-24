import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-expense-detail (tx)="msg=$event" [parent]="np"></app-expense-detail>
{{msg}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expenseService';
  public np="Expense Details";
  public msg:any
}
