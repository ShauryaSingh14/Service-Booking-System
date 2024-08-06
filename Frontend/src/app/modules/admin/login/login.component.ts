import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private Admin: AdminService) {}

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
      this.Admin.login(this.loginForm.value).subscribe(
        (data) => {
          this.res = data;
          // console.log(this.res);
          this.router.navigate(['/admin/dashboard/']);
        },
        (error) => {
          if (error.status == 422) alert('Password is incorrect');
          if (error.status == 404) alert('User does not exists');
        }
      );
    }
  }
}
