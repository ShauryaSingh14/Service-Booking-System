import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  constructor(private Customer: CustomerService, private Admin: AdminService) {}

  public res;
  public services;

  ngOnInit(): void {
    this.Customer.getCustomer(localStorage.getItem('id')).subscribe(
      (data) => (this.res = data),
      (error) => console.log(error)
    );

    this.Admin.getAllServices().subscribe(
      (data) => (this.services = data),
      (error) => console.log(error)
    );
  }
}
