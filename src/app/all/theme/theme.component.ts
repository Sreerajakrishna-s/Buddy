// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-theme',
//   templateUrl: './theme.component.html',
//   styleUrls: ['./theme.component.css']
// })
// export class ThemeComponent {
//   themes=[
//     {
//     title:'VGP',
//     description:'i like to visit here'
   
//     },
//     {
//     title:'MGM',
//     description:'i like to visit here',
   
   
//     },
//     {
//     title:'SA',
//     description:'i like to visit here'
//     },
    
//   ]
 
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  themes = [
    {
      title: 'VGP-Universal Kingdom',
      description: 'MGM Chennai is synonymous with high-energy adventure and fun',
      imageUrl: ''
    },
    {
      title: 'MGM',
      description: 'Address: SH 49, Injambakkam, Chennai, Tamil Nadu 600115',
      location:' East Coast Road, Muttukadu, Chennai',
      timing:'10:30 am to 06:30 pm; weekdays,10:30 am to 07:30 pm; Weekends and Public Holidays',
      entryfee:'Jumbo Package* per Adult – ₹ 699 per person Jumbo Package per Child – ₹ 549 per person',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkhvKC3cksYVAJt-9ZP6VuS2km_Da9lqQGQ&usqp=CAU'
    },
    {
      title: 'kiskintha',
      description: 'I like to visit here',
      imageUrl: 'https://image3.jpg'
    },
    {
      title: 'kiskintha',
      description: 'I like to visit here',
      imageUrl: 'https://image3.jpg'
    },
    {
      title: 'kiskintha',
      description: 'I like to visit here',
      imageUrl: 'https://image3.jpg'
    },
    {
      title: 'kiskintha',
      description: 'I like to visit here',
      imageUrl: 'https://image3.jpg'
    },
  ]
}

