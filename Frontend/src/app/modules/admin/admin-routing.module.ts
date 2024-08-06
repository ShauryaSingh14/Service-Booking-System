import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/home',
  },
  { path: 'dashboard/home', component: AdminComponent },
  { path: 'dashboard/addservice', component: AddServiceComponent },
  { path: 'dashboard/updateservice/:id', component: UpdateServiceComponent },
  { path: 'dashboard/viewbookings', component: ViewBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
