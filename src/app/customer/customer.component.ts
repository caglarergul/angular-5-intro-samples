import {Component, OnInit, Input} from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() {
  }

  customers: Customer[] = [];
  @Input() city: string;
  selectedCustomer: Customer;

  ngOnInit() {
    this.customers = [
      {id: 1, firstName: 'Çağlar', lastName: 'Ergül', age: 28},
      {id: 1, firstName: 'Pınar', lastName: 'Ergül', age: 30},
      {id: 1, firstName: 'Selda', lastName: 'Hızlı', age: 27},
      {id: 1, firstName: 'Adalet', lastName: 'Ergül', age: 62}

    ];
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

}
