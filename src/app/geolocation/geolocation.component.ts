import { Component ,OnInit} from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit{
  title = 'user-location-angular';
  location:any;
  locationJs: any;
  constructor(private commonService:CommonService){

  }

  ngOnInit(){
    this.commonService.getLocation().subscribe((response)=>{
      console.log(response);
      this.location = response;
    })

    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position);
      this.locationJs = position.coords;
    })
  }
}

