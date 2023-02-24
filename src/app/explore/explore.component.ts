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
      description: '.Whether you want to visit a fantastical world of make-believe, explore a magical kingdom, or journey into space, theme parks provide a way to escape reality and let your imagination run wild.',
      image: 'assets/theme.jpg',
      url: '/theme'
    },
    {
      title: 'ROOF TOP RESTAURANTS',
      description: 'Food tastes better with a view.The feeling of being elevated above the hustle and bustle of the city adds an extra level of excitement and elegance to the dining experience. ',
      image: 'assets/rooftop.jpg',
      url: '/rooftop-restaurants'
    },
    {
      title: 'MALLS',
      description: 'Experience the ultimate shopping destination.So, whether you\'re in the mood for shopping, eating, or entertainment, a mall is the perfect place to visit',
      image: 'assets/mall.jpg',
      url: '/malls'
    },
  
    {
      title: 'CLOTHING STORES',
      description: 'Wear your attitude. Whether you\'re looking for something classic and timeless or something bold and trendy, clothing stores have it all. ',
      image: 'assets/clothes.jpg',
      url: '/cloth',
    },
    {
      title: 'CAFES',
      description: 'Where every cup tells a story.Cafes are the perfect place to relax, socialize, and enjoy a cup of coffee.A good cafe is more than just a place to grab a quick drink',
      image: 'assets/cafe.jpg',
      url: '/cafes',
    },
  ]
}
