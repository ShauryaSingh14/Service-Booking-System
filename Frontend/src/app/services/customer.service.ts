import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  signup(customer) {
    return this.http.post(`${this.baseUrl}/customer/signup`, customer);
  }

  login(customer) {
    return this.http.post(`${this.baseUrl}/customer/login`, customer);
  }

  getCustomer(id) {
    return this.http.get(`${this.baseUrl}/customer/${id}`);
  }

  addBooking(data) {
    return this.http.post(`${this.baseUrl}/service/addBooking`, data);
  }

  cancelBooking(id) {
    return this.http.delete(`${this.baseUrl}/service/cancelBooking/${id}`);
  }

  getBookings(id) {
    return this.http.get(`${this.baseUrl}/bookings/${id}`);
  }
}
