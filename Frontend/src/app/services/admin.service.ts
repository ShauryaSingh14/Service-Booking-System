import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(admin) {
    return this.http.post(`${this.baseUrl}/admin/login`, admin);
  }

  getAllServices() {
    return this.http.get(`${this.baseUrl}/service/all`);
  }

  addService(service) {
    return this.http.post(`${this.baseUrl}/service/add`, service);
  }

  updateService(service) {
    return this.http.put(`${this.baseUrl}/service/update`, service);
  }

  deleteService(id) {
    return this.http.delete(`${this.baseUrl}/service/delete/${id}`);
  }

  getService(id) {
    return this.http.get(`${this.baseUrl}/service/${id}`);
  }

  getAllBookings() {
    return this.http.get(`${this.baseUrl}/bookings`);
  }
}
