import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-musttry',
  templateUrl: './musttry.component.html',
  styleUrls: ['./musttry.component.css']
})
export class MusttryComponent {
   items=[
    {
    title: 'Elliot’s Beach',
    subquote:  'Witness A Beautiful Sunrise',
    description: 'Ideal for:Early sunrise stroll. You can come along with your family or friends or just alone to enjoy the tranquility.',
    location: 'Location: Beasant Nagar, Chennai',
    image: 'assets/eliotsunrise.webp',
    cost:'Activity cost/Ticket fee: free',
    timing:'Timings: open all-day'
    },
    {
      title: 'Scuba Diving',
      subquote:  'Gear Up For Some Thrilling Adventure',
      about:'Rising temperatures definitely calls out for a dip into the cold waters of Chennai. If you are looking for some thrilling water activities then head to the Covelong Beach which is an ideal location for scuba diving in Chennai. ',
      description: 'Ideal for: Adventure souls',
      location: 'Location: Covelong Beach, Chennai',
      image: 'assets/scuba.webp',
      cost:'Activity cost/Ticket fee: INR 6,000 per person (approx.)',
      timing:'Timings: NA'
    },
    {
      title: ' Mahabalipuram',
      subquote:  'Marvel At The Sculptures',
      about:'One of the best things to do in Chennai for youngsters, you can rent two-wheelers and start early morning to Mahabalipuram.',
      description: 'Ideal for:Early sunrise stroll. You can come along with your family or friends or just alone to enjoy the tranquility.',
      location: 'Location: Mahabalipuram',
      image: 'assets/mahabalipuram.webp',
      cost:'Activity cost/Ticket fee: free',
      timing:'Entry timing and closing timings: 6 AM- 6 PM'
    },
    {
      title: ' Lion Safari',
      subquote:  'Head To Arignar Anna Zoological Park',
      about:'If your heart lies in the wilderness and if you love to explore the flora and fauna of a place then the perfect place for you is the Arignar Anna Zoological Park. It is one of the most famous picnic spots in Vandalur and is perfect for families with children',
      description: 'Ideal for: Friends, family, nature lovers',
      location: 'Grand Southern Trunk Rd, Vandalur, Tamil Nadu 600048',
      image: 'assets/zoo.webp',
      cost:'Activity cost/Ticket fee: INR 50 (Adults), INR 20 (Children below 12 years)',
      timing:' 9 am – 5 pm (Closed on Tuesdays)'
    }
  ]
  }
