import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children:[
      {
        path : '',
        component : CustomerListContainerComponent
      },

        {
            path:'add',
            component:CustomerFormContainerComponent
        }
       
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
