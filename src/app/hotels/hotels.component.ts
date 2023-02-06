import { Component } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  faThumbsUp = faThumbsUp;
  private readonly newProperty = "data:image/jpeg;base64,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";

  private readonly newProperty_1 = this.newProperty;



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
      image: this.newProperty,
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
      thumb_up: 390,
      thumbUpImage: 'assets/thumbs-up.png'
    },

  ]
}
