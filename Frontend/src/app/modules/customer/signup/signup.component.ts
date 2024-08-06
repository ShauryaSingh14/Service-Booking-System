import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private Customer: CustomerService) {}

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    mobileno: new FormControl('', [Validators.required]),
  });

  public res;

  ngOnInit(): void {}

  signup() {
    if (
      this.signupForm.valid &&
      this.signupForm.value.password === this.signupForm.value.confirmpassword
    ) {
      this.Customer.signup(this.signupForm.value).subscribe(
        (data) => {
          this.res = data;
          localStorage.setItem('id', this.res._id);
          this.router.navigate(['/customer/dashboard']);
        },
        (error) => console.log(error)
      );
    } else alert('Password and Confirm password must be same');
  }
}
