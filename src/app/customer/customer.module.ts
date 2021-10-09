import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CustomerService } from './customer.service';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { DateValidationService } from '../shared/service/datevalidation.service';
// import { HighlightDirective } from '../shared/directive/highlight.directive';


@NgModule({
  declarations: 
  [CustomerComponent,
    CustomerFormContainerComponent,
    CustomerFormPresentationComponent,
    CustomerListContainerComponent,
    CustomerListPresentationComponent,
    //  HighlightDirective
 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [CustomerService,
  DateValidationService],
})
export class CustomerModule { }
