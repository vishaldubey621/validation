import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.css']
})
export class CustomerListContainerComponent implements OnInit {

  public customerList$ : Observable<any>;

  constructor(private CustomerSerice:CustomerService) {
    this.customerList$= this.CustomerSerice.getCustomer()
   }

  ngOnInit(): void {
  }

  
}
