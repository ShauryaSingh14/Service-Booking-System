import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss'],
})
export class UpdateServiceComponent implements OnInit {
  constructor(
    private router: Router,
    private Admin: AdminService,
    private route: ActivatedRoute
  ) {}

  serviceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    visiting_price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  public res;
  public newData;

  ngOnInit(): void {
    this.Admin.getService(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.res = data;
        console.log(this.res);
        this.serviceForm.controls['name'].setValue(this.res.name);
        this.serviceForm.controls['type'].setValue(this.res.type);
        this.serviceForm.controls['visiting_price'].setValue(
          this.res.visiting_price
        );
        this.serviceForm.controls['description'].setValue(this.res.description);
      }
    );
  }

  onSubmit() {
    if (this.serviceForm.valid) {
      this.newData = this.serviceForm.value;
      this.newData.id = this.res._id;
      this.Admin.updateService(this.newData).subscribe(
        (data) => {
          // alert('Service updated successfuly');
          this.router.navigate(['/admin/dashboard']);
        },
        (error) => console.log(error)
      );
    }
  }
}
