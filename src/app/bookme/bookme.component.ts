import { Component } from '@angular/core';
import { Location } from '@angular/common';
interface Booking {
  name: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  numGuests: number;
}
@Component({
  selector: 'app-bookme',
  templateUrl: './bookme.component.html',
  styleUrls: ['./bookme.component.css']
})
export class BookmeComponent {
  booking: Booking = {
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    numGuests: 0
  };
  
  submitted = false;

  constructor(private location: Location) {}

  onSubmit(): void {
    // your form submission logic here
    this.submitted = true;
  }

  goBack(): void {
    this.location.back();
  }
}

