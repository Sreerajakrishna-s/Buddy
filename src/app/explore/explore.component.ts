import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})

export class ExploreComponent {
  
  cards = [
    {
      title: 'THEME PARKS',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      address: '1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Tamil Nadu 600016',
      phone: '+044 2231 4343',
      image: 'assets/theme.jpg',
      url: 'assets/theme.html'
     
      

    },
    {
      title: 'ROOF TOP RESTAURANTS',
      description: 'College is where you learn to think, grow, and become who you are meant to be.',
      address: '1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Tamil Nadu 600016',
      phone: '+044 2231 4343',
      image: 'assets/rooftop.jpg',
      url: 'assets/rooftop.html'
      
      

    },
    {
      title: 'MALLS',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      address: '1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Tamil Nadu 600016',
      phone: '+044 2231 4343',
      image: 'assets/mall.jpg',
      url: 'assets/malls.html'
      

    },
    {
      title: 'ART GALLERY',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      address: '1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Tamil Nadu 600016',
      phone: '+044 2231 4343',
      image: 'assets/art.jpg',
      url: 'assets/artgallery.html',
      // <a [routerLink]="['/art-gallery']" class="card__link">

     
      

    },
    {
      title: 'CLOTHING STORES',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      address: '1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Tamil Nadu 600016',
      phone: '+044 2231 4343',
      image: 'assets/clothes.jpg',
      url: 'assets/clothing.html',
      
      

    },
    {
      title: 'CAFES',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      address: '1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Tamil Nadu 600016',
      phone: '+044 2231 4343',
      image: 'assets/cafe.jpg',
      url: 'all/cafe',
      
      

    },
  ]
}
