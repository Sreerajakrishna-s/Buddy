
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  themes = [
    {
      title: 'MGM Dizzee World',
      description: 'A drive of about 32 km from the Chennai city center brings you to this amusement destination where hours of incredible entertainment await you.',
       location:'Location: East Coast Road, Muttukadu, Chennai',
       time:'Timings:10:30 am to 06:30 pm; weekdays & 10:30 am to 07:30 pm; Weekends and Public Holidays',
       entryfee:'Entry Fee:Jumbo Package* per Adult  ₹ 699 per person Jumbo Package per Child  ₹ 549 per person',
      image: 'https://media.istockphoto.com/id/157278427/photo/roller-coaster.jpg?s=612x612&w=0&k=20&c=x0S-ybi-c_vjBWqWsk54sW17AqWJCIePFFiXP0f1rsk='
    },
    {
      title: 'Queensland',
      description: 'The park may be named Queensland but it can be aptly described as the king of all amusement parks in Chennai.',
      location:'Location: Chennai-Bengaluru Highway, Palanjur, Sembarambakkam, Chennai',
      time:'Timings:10:00 am to 06:30 pm; weekdays ; 10:00 am to 07:30 pm; Weekends and Public Holidays;Closed on Mondays',
      entryfee:'Entry Fee:Adults – ₹ 550 per head Children – ₹ 450 per head ;Free entry for children below 2 feet (0.61 m) height ',
      image: 'https://media.istockphoto.com/id/121499344/photo/packed-red-roller-coaster-going-through-a-circular-opening.jpg?s=612x612&w=0&k=20&c=vBTSwETCX3WcfAUwEMXVHBTnETpB8EyQ2bSYewvY_zc='
    },
    {
      title: 'kiskintha',
      description: 'Thrilling rides like Zyclone, Space Shuttle, and Super Jumper can test your quest for adventurous fun. Family rides like Arabian Nights, Bumper Car, and Road Train can keep everyone from six to sixty entertained for hours.',
      location:'Location: Varadarajapuram, Darkas Ward – II, Near Tambaram, Chennai',
      time:'Timings:10:00 am to 06:30 pm; Monday to Saturday & 10:00 am to 07:00 pm; Sundays and Public Holidays',
      entryfee:'Entry Fee: Adults – ₹ 690 per head & Children – ₹ 490 per head (Height between 76 cm and 137 cm)',
      image: 'assets/kiskintha.jpg'
    },
    {
      title: 'VGP Universal Kingdom',
      description: 'The aqua park and the snow park are added attractions of the VGP Universal Kingdom. They have a number of rides and activities that let you escape the scorching heat of the city and enjoy a cool fun-filled sojourn',
      location:'Location: Injambakkam, East Coast Road, Chennai',
      time:'Timings: 11:00 am to 07:30 pm; every day',
      entryfee:'Entry Fee*: ₹ 550 per head for Golden Crown Universal Kingdom + Aqua Kingdom; ₹ 945 per head for Platinum Crown (Universal Kingdom,Aqua Kingdom,Snow Kingdom)',
      image: 'assets/vgpking.jpg'
    },
    {
      title: 'Adventure Zone',
      description: 'Adventure Zone is definitely for you. What’s more, you can even chill out in the 2400 sq. ft. swimming pool or opt for overnight camping at the facility.',
      location:'Location: Cheyyur Road',
      entryfee:'Entry Fee:₹ 500 per head (for regular activities)  Special rates apply for special adventure sports',
      time:'Timings: 09:00 am to 06:00 pm; every day',
      image: 'assets/zone.jpg'
    },
    {
      title: 'Wild Tribe Ranch',
      description: 'Among the attractions lined up here for the adventure-enthusiasts are Paint Ball, Flying fox, Rungee Run, Jallikattu, Monkey Walk, Bull’s Eye, Tribal Path, Xtrme Bungee Ejection, and even Sumo Wrestling.',
      location:'Location: East Coast Road, Nemmeli Village, Chennai',
      time:'Timings:11:00 am to 07:00 pm; Weekdays;10:00 am to 08:00 pm; Weekends and Public Holidays;Closed on Tuesdays;Entry is closed prior to 2 hours of closing time',
      entryfee:'Kiddie (Below 48”): ₹ 390 per head (for 9 activities),Juniors (Between 48” and 56”): ₹ 790 per head (for 15 activities),Adults- Full Throttle (Above 56”)',
      image: 'assets/wild.jpg'
    },
    {
      title: 'Monkey Monk',
      description: 'Touted as Chennai’s first chill-thrill zone, the thrill zone of the park includes activities like the Burma Bridge, Valley Crossing, Flying Fox, and Commando Net among others.',
      location:'Location: ECR Road, Pattipulam Village, Chengalpattu, Kancheepuram District, Chennai',
      time:'Timings: 10:00 am to 07:00 pm; every day',
      entryfee:'Entry Fee:Adults – ₹ 550 per head &Children – ₹ 450 per head',
      image: 'assets/monkey.jpg'
    },
   
  ]
}

