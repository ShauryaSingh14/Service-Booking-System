import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private Admin: AdminService) {}

  public services;

  ngOnInit(): void {
    this.Admin.getAllServices().subscribe(
      (data) => (this.services = data),
      (error) => console.log(error)
    );
  }

  delete(id) {
    this.Admin.deleteService(id).subscribe(
      (data) => {
        // alert('Service deleted successfuly');
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }
}
