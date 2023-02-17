import { Component } from '@angular/core';

@Component({
  selector: 'app-malls',
  templateUrl: './malls.component.html',
  styleUrls: ['./malls.component.css']
})
export class MallsComponent {
  roofs=[
    {
      title: 'Phoneix',
      phone:'Phone: 044 6134 3008',
        description: 'Phoenix Marketcity is a shopping mall developed by Phoenix Mills Limited located in Chennai, Tamil Nadu, India. It was opened in January 2013 and is the 2nd largest mall in the city. It was the fourth largest mall in India in 2018.',
        address:'Velachery Rd, Indira Gandhi Nagar, Velachery, Chennai, Tamil Nadu 600042',
        image: 'https://media.istockphoto.com/id/182408547/photo/elegant-shopping-mall.jpg?s=612x612&w=0&k=20&c=qpoZ75-JlU67tx710rgzp4Eb38kb5H-2M_bG9TTEZK0='
  },
    {
      title: 'VR Chennai',
      phone:'Phone: 044 6670 5555',
        description: ' VR mall Chennai is the newest mall in Chennai near Koyambedu Bus Terminal. It is one of the best place to hang out with friends and family during free time',
        address:'100 Feet Rd, Thirumangalam, Anna Nagar, Chennai, Tamil Nadu 600040',
        image: 'https://media.istockphoto.com/id/1035083818/photo/avani-riverside-mall-at-shibpur-howrah-west-bengal-india.jpg?s=612x612&w=0&k=20&c=gAHQXI5LBYpWFS8RU6D9AG59OdeIs6tkrOQ2FGj5izU='
  },
    {
      title: 'Marina Mall',
      phone:'078453 94944',
        description: ' Chinese · North Indian · Mughlai · Seafood · Desserts · Beverages · Biryani.',
        address:'3rd floor, 4, AA Block 2nd St, Lapis lagoon, AA Block, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040',
        image: 'https://media.istockphoto.com/id/181996772/photo/busy-shopping-mall.jpg?s=612x612&w=0&k=20&c=a_V8JwGNC6nK4tOFMhlMQBt0yCd4tYko3VE_PwpHQNU='
  },
    {
      title: 'Express Avenue',
      phone:'078453 94944',
        description: 'Express Avenue is a shopping mall in Chennai promoted by Express Infrastructure, A division of Express Newspapers Pvt. Ltd. It is home to the largest gaming arcade in South India.',
        address:'3rd floor, 4, AA Block 2nd St, Lapis lagoon, AA Block, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040',
        image: 'https://media.istockphoto.com/id/1317457474/photo/crowd-of-people-shopping-in-las-arenas-de-barcelona-one-of-the-coolest-malls-in-barcelona.jpg?s=612x612&w=0&k=20&c=10JXhY9kcaE6_9AGzUG_HddMIGccjJkxk2MXbu9-eQM='
  },
    {
      title: 'Forum Vijaya Mall',
      phone:'Phone: 044 4904 9000',
        description: ' Nexus Vijaya Mall is a shopping mall located in Vadapalani, Chennai, Tamil Nadu, India, developed by Prestige Group. This mall has approx 650,000 square feet of retail space. More than 100 shops occupy its four floors.',
        address:' Address: 183, Great Southern Trunk Rd, Arcot Rd, Vadapalani, Chennai, Tamil Nadu 600026',
        image: 'https://media.istockphoto.com/id/1213159397/photo/international-terminal-at-indira-gandhi-airport-in-delhi-india.jpg?s=612x612&w=0&k=20&c=HYpq9mtL3GzLN8TpugtNoPBoT10N23pR25_x9JzW5ZE='
  },
    {
      title: 'Spencer Plazza',
      phone:'Phone: 044 2849 1001',
        description: '  Spencer Plaza is a shopping mall located on Anna Salai in Chennai, Tamil Nadu, India, and is one of the modern landmarks of the city.',
        address:' 6th floor No 272, Seethakathi Business Centre, 688, Anna Salai, Thousand Lights East, Thousand Lights, Chennai, Tamil Nadu 600006',
        image: 'https://media.istockphoto.com/id/537384456/photo/exterior-of-select-citywalk-in-delhi.jpg?s=612x612&w=0&k=20&c=bVScVjr8k7ggW2VMPXV5Dof3N7VgLhuq9-95Xlig3EY='
  },
    {
      title: 'Skywalk',
      phone:'Phone: 088009 00009',
        description: ' India\'s largest premium film exhibition company. Enjoy Indian and International cinema with delicious gourmet food, comfortable recliner seats and the classic PVR experience.',
        address:'Address: 1, Nelson Manickam Rd, Aminjikarai, Chennai, Tamil Nadu 600029',
        image: 'https://media.istockphoto.com/id/622522878/photo/supermarket-in-suburban-area.jpg?s=612x612&w=0&k=20&c=gCHO1oldk8g6dDJQrnMX3l7A3wugchmI5Cwf1l8yDLE='
  },
]

}
