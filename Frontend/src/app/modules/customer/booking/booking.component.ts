import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor(
    private Customer: CustomerService,
    private Admin: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  bookingForm = new FormGroup({
    date: new FormControl('', Validators.required),
  });

  public res;

  ngOnInit(): void {
    this.Admin.getService(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.res = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      let data = {
        sid: this.route.snapshot.paramMap.get('id'),
        cid: localStorage.getItem('id'),
        date: this.bookingForm.value.date,
      };

      this.Customer.addBooking(data).subscribe(
        (data) => this.router.navigate(['/customer/dashboard']),
        (error) => console.log(error)
      );
    }
  }
}
