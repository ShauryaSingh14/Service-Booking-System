import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private Customer: CustomerService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  public res;

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.Customer.login(this.loginForm.value).subscribe(
        (data) => {
          this.res = data;
          localStorage.setItem('id', this.res._id);
          this.router.navigate(['/customer/dashboard']);
        },
        (error) => {
          if (error.status == 422) alert('Password is incorrect');
          if (error.status == 404) alert('User does not exists');
        }
      );
    }
  }
}
