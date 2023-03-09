import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-famousplaces',
  templateUrl: './famousplaces.component.html',
  styleUrls: ['./famousplaces.component.css']
})
export class FamousplacesComponent {
   constructor(private location: Location,private router: Router,) { }
  places = [
    {
  image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/2d/66/a3/escape-cinemas.jpg?w=500&h=400&s=1',
  title:'Escape Cinemas',
  address:'49 50, L Express Avenue, Express Estate, Royapettah, Chennai, Tamil Nadu 600014'
  },
    {
  image:'assets/gameistry.jpeg',
  title:'Gameistry',
  address:'2nd Floor SCM Jamaldeen Chambers, Red Cross Rd, Egmore, Chennai, Tamil Nadu 600008'
  },
    {
  image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4b/7f/1c/getlstd-property-photo.jpg?w=500&h=400&s=1',
  title:'Monkey Monk',
  address:'No. 109, ECR Road, Pattipulam, Village, Chennai, Tamil Nadu 603104'
  },
    {
  image:'assets/art.jpg',
  title:'Sathyam Cinemas',
  address:'Shop, 4th Floor, Front Anchor, Grand Square Mall, 137, Velachery - Tambaram Main Rd, V.O.C Nagar, Doctor Seetaram Nagar, Velachery, Chennai, Tamil Nadu 600062'
  },
    {
  image:'https://lh5.googleusercontent.com/p/AF1QipPdydIhuDrY7aZxZfc4KzJvQ5Z2g7V4-w8-0f0j=w92-h92-n-k-no ',
  title:'Fun City',
  address:'T-01, 3rd Floor, VR Mall Chennai, Jawarharlal, 100 Feet Rd · In VR Chennai'
  },
]
submitted = false;



  onSubmit(): void {
    // your form submission logic here
    this.submitted = true;
  }
  
  goBack(): void {
    this.location.back();
  
  
  }
}