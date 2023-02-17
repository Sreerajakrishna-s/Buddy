import { Component,OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-rooftop',
  templateUrl: './rooftop.component.html',
  styleUrls: ['./rooftop.component.css']
})
export class RooftopComponent {
roofs=[
  {
    title: 'On D Roof Restaurant',
    phone:'078453 94944',
      description: ' Chinese · North Indian · Mughlai · Seafood · Desserts · Beverages · Biryani.',
      address:'3rd floor, 4, AA Block 2nd St, Lapis lagoon, AA Block, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/v/m/p63828-15785015275e16059731bec.jpg?tr=tr:n-medium'

},
  {
    title: '99 Bar & Grill',
      description: 'Nice place for weekend hangout with friends. Great ambience. Live screening. Dj and dance floor on weekends. Rooftop is available.',
      address:'144, Lattice Brg Rd, Cosmopolitian Colony, Periyar Nagar, Thiruvanmiyur, Chennai, Tamil Nadu 600041',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/d/h/p73678-15760396005df074b06905b.jpg?tr=tr:n-medium'

},
  {
    title: 'Momo Nation Cafe',
      description: 'This restaurant offers you nice food and a place to rest after a long walk around Kitchen e Lazeez. Chinese and Sichuan food is worth a try',
      address:'No.2, T2, 4th Main Rd, Anna Nagar, Chennai, Tamil Nadu 600040',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/k/a/p114772-167344774063bec93c8a258.jpg?tr=tr:n-medium'

},
  {
    title: 'La Cabana ',
      description: 'La Cabana is an amazing restaurant and bar located in Hotel Park Elanza in Chennai. People usually step into this outstanding eating place',
      address:'125, Valluvar Kottam High Rd, Ponnangipuram, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/o/a/p52219-15489322785c52d4b6ee30f.jpg?tr=tr:n-medium'

},
  {
    title: 'The Living Room',
      description: 'Bar bites are served alongside cocktails, wine & beer in this hip hangout that has a terrace.',
      address:'3rd Floor, New No-73, AG Block 4th Avenue, 7th Main Rd, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/b/x/p78930-16082757685fdc57380dbee.jpg?tr=tr:n-medium'
},
  {
    title: 'Board Walk',
      description: 'Book a Table at Board Walk Restaurant in Egmore well known for Continental Restaurants in Chennai',
      addres:'37G8+P2J, Gandhi Irwin Bridge Rd, Ansari Estate, Egmore, Chennai, Tamil Nadu 600008',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/z/d/p1637-1661944553630f42e991cb5.jpg?tr=tr:n-medium'

},
  {
    title: 'Cocoa & Creme',
      description: 'Bar bites are served alongside cocktails, wine & beer in this hip hangout that has a terrace.',
      address:'29&31, Thanikachalam Rd, Parthasarathi Puram, T. Nagar, Chennai, Tamil Nadu 600017',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/v/w/p98687-1650528685626111ad8dcca.jpg?tr=tr:n-medium'

},
  
]

}
