import { Component } from '@angular/core';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent {
  
  explores=[
    {
      title:'Art and activities',
      area:'Mylapore',
      area2:'George Town',
      area3:'Royapetah'
    },
    {
      title:'Architecture:',
      area:'Rippon Building',
      area2:'NAtional Art Gallery',
      area3:'Dakshinchitra',
      area4:'LightHouse',

    },
    {
      title:'Street Shopping:',
      area:'Pondy Bazzar',
      area2:'Pantheon road',
      area3:'Moore street',
      area4:'Ranganathan street'
    },
    {
      title:'Library',
      area:'Connemara',
      area2:'Anna Cenetenary Library',
      area3:'Roja Muthiah Research Library',
      area4:'Marx Library',
      area5:'Shenoy Nagar Library'
    },
    {
      title:'Malls',
      area:'VR Mall',
      area2:'Express Avenue',
      area3:'Phoneix Market City'
    },
    {
      title:'Museum',
      area:'Fot st Georfe Museum',
      area2:'Chennai Rail Museum',
      area3:'Egmore Museum'
    },
    {
      title:'Parks',
      area:'Chhetpet eco park',
      area2:'Semmozhi poonga',
      area3:'Royapetah'
    },
    {
      title:'Religious Places',
      area:'Kapaleeswarar Temple ',
      area2:'Vadapalani ',
      area3:'St thomas Mpunt',
      area4:'Thousand lights mosque',
      area5:'Santhome church'
    },
    {
      title:'Beaches',
      area:'Marina Mall',
      area2:'kovalam',
      area3:'Aakkarai Beach',
      area4:'Eliot Beach',
      area5:'Thiruvanmiyur Beach'

    },
    {
      title:'Mini Gateways',
      area:'Pulicat Lake',
      area2:'Mahabalipuram',
      area3:'Pondicherry',
      area4:'Yelagiri',
      area6:'Yercaud',
      area5:'Vellore'
    },
    {
      title:'Staycation',
      area:'Raintree',
      area2:'Taj Mews',
      area3:'Somerset',
      area4:'St.Mary \'s Road',
    }
  ]

}
