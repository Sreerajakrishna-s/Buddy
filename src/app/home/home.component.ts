import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pop = false;
  add = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  addfu() {
    this.add = true;
    this.pop = true;
  }

  closeAd() {
    this.add = false;
  }

  xfu() {
    this.pop = false;
    this.add = false;
  }
  


}

