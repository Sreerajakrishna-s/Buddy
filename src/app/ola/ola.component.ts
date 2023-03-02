
import { Component } from '@angular/core';

@Component({
  selector: 'app-ola',
  templateUrl: './ola.component.html',
  styleUrls: ['./ola.component.css']
})
export class OlaComponent {
  isBookingFormVisible = false;
  pickupLocation = 'Le-Royal';
  dropLocation = '';
  date = '';
  time = '';
  phone='';
  email='';

  showBookingForm() {
    this.isBookingFormVisible = true;
  }

  submitBookingForm() {
    // perform form submission logic here
    alert('Ride booked successfully!');
    this.isBookingFormVisible = false;
  }
}
