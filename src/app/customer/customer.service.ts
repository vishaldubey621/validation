import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { ValidatorFn, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private http : HttpClient) { }
 

  public addCustomer(customer)
  {
  
     return this.http.post('http://localhost:3000/customer',customer).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  public getCustomer()
  {
   return this.http.get('http://localhost:3000/customer'); 
  }
  
  public dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    return (formGroup: FormGroup) => {

      // const fromdate = this.leaveForm.get('from')?.value
      // const todate =  this.leaveForm.get('to')?.value

      const fromdate = formGroup.controls['from'];
      const todate = formGroup.controls['to'];


    if ((fromdate !== null && todate !== null) && fromdate > todate) {
      return { error: true };
}
    return null;
  };

}
}
