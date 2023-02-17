import { Component } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent {
  themes = [
    {
      title: 'kiskintha',
      description: 'I like to visit here',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/b/x/p78930-16082757685fdc57380dbee.jpg?tr=tr:n-medium'
    },
  ]

}
