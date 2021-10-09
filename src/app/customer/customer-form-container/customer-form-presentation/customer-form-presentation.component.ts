import { Component, OnInit, Output,EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { CustomerFormPresenterService } from '../customer-form-presenter/customer-form-presenter.service';
import { FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [CustomerFormPresenterService]
})
export class CustomerFormPresentationComponent implements OnInit {
  public submitted = false;

  @Output() customerData : EventEmitter<any> = new EventEmitter<any>();

  public customerForm: FormGroup = this.customerFormPresenterService.bindForm();

  constructor(private customerFormPresenterService : CustomerFormPresenterService) { {
    
  } }

  ngOnInit(): void {
    this.pastDateDisable();
    
    this.customerFormPresenterService.customerData$.subscribe((customerData: any) => {
  
      this.customerData.emit(customerData)
    console.log("emit data");
    
    })
  }
  public calculateDiff(startdate:string ,enddate:string)
            {
              const fromdate = this.customerForm.get('from')?.value
              
               const todate =  this.customerForm.get('to')?.value
               let date1 =new Date(fromdate)
               let date2 =new Date(todate)
               let Time = date2.getTime() - date1.getTime(); 
               let Days = Time / (1000 * 3600 * 24); //Diference in Days
               return Days
            };

  get form(){
    return this.customerForm.controls;
  }
  minDate :any 
  public pastDateDisable()
{
  var date : any = new Date();
  var todayDate :any = date.getDate();
  var month : any = date.getMonth() + 1 ;
  var year : any = date.getFullYear();
  if(todayDate < 10)
  {
    todayDate =  '0' + todayDate;
  }
  if(month < 10)
  {
    month =  '0' + month;
  }
  this.minDate = year + "-"  + month + "-" + todayDate;
}


  
  onSubmit()
  {
    
    this.submitted = true;
    let days = this.calculateDiff('startdate','eendate')
    console.log(this.customerForm.value);
    this.customerForm.controls.days.setValue(days)
    this.customerFormPresenterService.customerDetails(this.customerForm)
    
  }
}
