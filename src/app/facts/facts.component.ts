import { Component } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent {
  facts = [
    {
      description: 'Chennai is the capital city of the Indian state of Tamil Nadu.It is located on the Coromandel Coast of the Bay of Bengal and has the second longest beach in the world, Marina Beach.Chennai is known for its rich cultural heritage and is famous for classical dance forms such as Bharatanatyam and Carnatic music. ',
      image: 'assets/madras.jpg',
    },
    {
      description: 'The city is also a major automobile hub in India and is home to several automobile manufacturing companies such as Royal Enfield, Hyundai and Nissan.Chennai is also known for its rich culinary heritage, with a diverse range of vegetarian and non-vegetarian dishes. It is considered as tht "Detroit of Asia"',
      image: 'assets/hubb.jpg'

    },
    {
      description: 'The city is famous for its beach festivals, such as the Chennai Beach Festival, which is held every year and features sand sculptures, food stalls, and cultural performances.Chennai is also a hub for medical tourism and has some of the best healthcare facilities in India, including the Apollo Hospitals.',
      image: 'assets/bch.jpg',

    },
    {
     
      description: ' The city has several historical and religious landmarks, including Fort St. George, Kapaleeswarar Temple, and the Parthasarathy Temple.Chennai is well connected to other parts of India and the world, with a major airport and seaport, as well as excellent road and rail networks.',
      image: 'assets/temple.jpg',
    },
    {
     
      description: 'The city is also famous for its traditional handloom textiles, such as Kanjeevaram silk sarees, and has a thriving handloom industry. Popularly known as the "City of Silk" and the "City of 1,000 temples," Kanchipuram, 70 km from Chennai, is synonymous with handwoven silk sarees     ',
      image: 'assets/cloth.jpg',
    },
    {
     
      description: 'Chennai is home to several national parks and wildlife sanctuaries, including the Guindy National Park and the Crocodile Bank.      ',
      image: 'assets/tour.jpg',
    },
    {
     
      description: 'After the establishment of the Company"s factory at Madras in 1639, weavers and merchants were attracted from many other south Indian centres, and settled along the coast north of Fort St George, in what became known as "Black Town," as opposed to the "White Town" in the fort. ',
      image: 'assets/black.jpg',
    },
    {
     
      description: 'Chennai has the biggest artificial sea port in India and the biggest port in Bay of Bengal region. The oldest cricketstadium in India is located in Chennai known as Chepauk M.A. Chidambaram staium. The oldest shopping in India was built during the British rule in 1863.',
      image: 'assets/port.jpg',
    },
    {
     
      description: 'Mylapore area is the heart of Chennai city. This area is famous for temple. This area also has good market & restaurants near by.The region is considered to be the birthplace of the famous Tamil philosopher Valluvar.',
      image: 'assets/mylapore.jpg',
    },
  ]
}
