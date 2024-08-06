import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {
  constructor(private Customer: CustomerService) {}

  public booking;

  ngOnInit(): void {
    this.Customer.getBookings(localStorage.getItem('id')).subscribe(
      (data) => (this.booking = data),
      (error) => console.log(error)
    );
  }

  delete(id) {
    this.Customer.cancelBooking(id).subscribe(
      (data) => {
        // alert('Service deleted successfuly');
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }
}
