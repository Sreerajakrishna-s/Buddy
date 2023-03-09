import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  faThumbsUp = faThumbsUp;
 
  constructor(private router: Router,private location: Location) { }

  redirectToOtherPage() {
    this.router.navigate(['/ola']);
  }


  hotels = [
    {
      title: 'LE-ROYAL MERIDIAN',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      address: '1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Tamil Nadu 600016',
      phone: '+044 2231 4343',
      image: 'assets/le royal.jpg',
      url: 'assets/leroyal.html',
      thumb_up: 31000
      

    },
    {
      title: 'HILTON',
      description: 'Located 15 minutes from the airport, Hilton Chennai offers award-winning dining and authentic hospitality to make your next stay in Chennai even more memorable',
      address: '124, 1, 100 Feet Rd, Poomagal Nagar, Guindy, Chennai, Tamil Nadu 600032',
      phone:  '+044 2225 5555',
      image:'assets/hilton.jpg',
      url: 'assets/hilton.html',
      thumb_up: 3000
    },
    {
      title: 'LEMON TREE',
      description: 'Located in the bustling city centre of Chennai, Lemon Tree Hotel offers a luxurious stay with top-notch facilities and a fully-equipped business centre.',
      address: ' Address: 72, Sardar Patel Road, Guindy, Chennai',
      phone: '+044 4423 2323',
      image: "assets/lemontree.jpg",
      url: 'assets/lemontree.html',
      thumb_up: 270
    },
    {
      title: 'HYATT',
      description: 'Hyatt Regency Chennai, located on the iconic Anna Salai in the heart of Chennai is the perfect destination for authentic hospitality.',
      address: '365, Anna Salai, Teynampet Chennai, Tamil Nadu, India, 600018.',
      phone:'+1800 122 1234',
      image: '',
      url:'assets/hyatt.html',
      thumb_up: 500

    },
    {
      title: 'ITC CHOLA',
      description: 'The ITC Grand Chola is a 5-star luxury hotel in Chennai.It is located in Guindy, opposite SPIC building .',
      address: ' 63, Anna Salai, Little Mount, Guindy, Chennai, Tamil Nadu 600032',
      phone: '+04422200000',
      image: "assets/CHOLA.jpg",
      url:'assets/chola.html',
      thumb_up: 1000
    },
    {
      title: 'TAJ CORAMENDAL',
      description: 'Offering a fusion of rich South Indian design and classic elegance, it has been a landmark of fine living and hospitality in Chennai for four decades',
      address: ' 37, Uthamar Gandhi Rd, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034',
      phone: '+044 66002827',
      image: "assets/taj.jpg",
      url:'assets/taj.html',
      olaurl:'',
      thumb_up: 390,
      thumbUpImage: 'assets/thumbs-up.png'
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
