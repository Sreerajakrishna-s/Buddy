import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  places = [
    {
      title: 'LE-ROYAL MERIDIAN',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      address: '1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Tamil Nadu 600016',
      phone: 4422314343,
      image: 'assets/le royal.jpg',
      url: 'assets/leroyal.html'

    },
  ]

}
