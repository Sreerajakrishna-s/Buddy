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
      image: 'assets/theme.jpg',
      url: '/theme'
    },
    {
      title: 'ROOF TOP RESTAURANTS',
      description: 'College is where you learn to think, grow, and become who you are meant to be.',
      image: 'assets/rooftop.jpg',
      url: '/rooftop-restaurants'
    },
    {
      title: 'MALLS',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      image: 'assets/mall.jpg',
      url: '/malls'
    },
    {
      title: 'ART GALLERY',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      image: 'assets/art.jpg',
      url: '/art'
    },
    {
      title: 'CLOTHING STORES',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      image: 'assets/clothes.jpg',
      url: '/cloth',
    },
    {
      title: 'CAFES',
      description: ' Set amidst landscaped grounds, the 5-star Le Royal Meridien includes an outdoor swimming pool, a variety of recreational facilities and 6 dining options.',
      image: 'assets/cafe.jpg',
      url: '/cafes',
    },
  ]
}
