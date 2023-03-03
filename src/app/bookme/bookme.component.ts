import { Component } from '@angular/core';
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

  onSubmit() {
    this.submitted = true;
  }
}

