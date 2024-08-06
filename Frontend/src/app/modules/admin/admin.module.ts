import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

@NgModule({
  declarations: [AdminComponent, LoginComponent, DashboardComponent, AddServiceComponent, UpdateServiceComponent, ViewBookingsComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [DashboardComponent, AdminComponent],
})
export class AdminModule {}
