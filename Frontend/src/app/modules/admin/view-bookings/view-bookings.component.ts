import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.scss'],
})
export class ViewBookingsComponent implements OnInit {
  constructor(private Admin: AdminService) {}

  public booking;

  ngOnInit(): void {
    this.Admin.getAllBookings().subscribe(
      (data) => (this.booking = data),
      (error) => console.log(error)
    );
  }
}
