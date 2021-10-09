import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { DateValidationService } from 'src/app/shared/service/datevalidation.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerFormPresenterService {


  public customerData: Subject<any> = new Subject<any>();
  public customerData$: Observable<any>;

  customerDetails(customerForm: FormGroup) 
  {
  
    this.customerData.next(customerForm.value);
  }

  constructor(private dateValidationService: DateValidationService) { 
    
    this.customerData$ = this.customerData.asObservable();
  }
 
    public bindForm() {
      return new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormControl(),
        on: new FormControl(),
        from: new FormControl('',[Validators.required]),
        to: new FormControl('',[Validators.required]),
        days: new FormControl()
      },
      {
        validators :[
          this.dateValidationService.datevalidator('from', 'to')
        ]
      }
        
  
             );
      }
         
    }
      
          
        
