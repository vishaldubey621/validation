
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateValidationService {

  constructor() { }

  public datevalidator(fromdate: string, todate: string) {

    return (formGroup: FormGroup) => {


      const from = formGroup.controls[fromdate];
      const to = formGroup.controls[todate];

      let fromDate = new Date(from.value).getTime();
      let toDate = new Date(to.value).getTime();
      let currentDate = new Date().getTime();
      console.log(fromDate, toDate)


      if ((fromDate !== null && toDate !== null) && fromDate > toDate) {
        console.log(fromDate, toDate)
        console.log(formGroup)
        from.setErrors({ fromDateMoreThanLessDate: true });
      } 
      if ((fromDate !== null) && fromDate < currentDate) {
       
        from.setErrors({ fromDateMoreThanCurrentDate: true });
      }
      if ((fromDate !== null && toDate !== null) && fromDate < toDate) {
        
         from.setErrors({ toDateMoreThanfromDate: true });
       } 
       if ((fromDate !== null && toDate !== null) && fromDate == toDate) {
        
        from.setErrors({ toDateSamefromDate: true });
      }
       if ((toDate !== null) && toDate < currentDate) {
       
        from.setErrors({ toDateMoreThanCurrentDate: true });
      return null;
    };  
  }



 
}

}
