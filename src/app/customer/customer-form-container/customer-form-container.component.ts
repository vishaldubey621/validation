import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form-container',
  templateUrl: './customer-form-container.component.html',
  styleUrls: ['./customer-form-container.component.css']
})
export class CustomerFormContainerComponent implements OnInit {

  constructor(private CustomerService:CustomerService) { }

  ngOnInit(): void {
  }
  public addcustomerData(value: any) {
    this.CustomerService.addCustomer(value)
    console.log(value);

  }

}
