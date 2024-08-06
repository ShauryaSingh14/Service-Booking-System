import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
})
export class AddServiceComponent implements OnInit {
  constructor(private router: Router, private Admin: AdminService) {}

  serviceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    visiting_price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  onSubmit() {
    if (this.serviceForm.valid) {
      this.Admin.addService(this.serviceForm.value).subscribe(
        (data) => {
          // alert('Serivce added successfuly');
          this.router.navigate(['admin/dashboard']);
        },
        (error) => console.log(error)
      );
    }
  }
}
