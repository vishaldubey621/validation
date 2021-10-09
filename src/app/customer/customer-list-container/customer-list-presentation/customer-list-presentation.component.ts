import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CustomerListPresenterService } from '../customer-list-presenter/customer-list-presenter.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [CustomerListPresenterService]
})
export class CustomerListPresentationComponent implements OnInit {
  private _customerList: any[] = [];

  @Input() public set customertList(value: any)
  {
  
    if(value) {
      this._customerList= value
      console.log("value");
      
  }
}

public get customerList():any
{
  return this._customerList
}

  constructor(private CustomerListPresenterService:CustomerListPresenterService) { }

  ngOnInit(): void {
  }

}
