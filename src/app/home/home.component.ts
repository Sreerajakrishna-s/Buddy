import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   pop:boolean=false;
  add:boolean=false;
  addfu(){
    this.add=true;
    this.pop=true;
  }
  searchQuery = '';

  constructor() { }

  ngOnInit() {
    this.autoType();
  }

  autoType() {
    const text = 'Search and Explore....'; // Replace this with your desired search query
    let index = 0;

    // Use setInterval to append the next character to searchQuery and move the cursor
    const intervalId = setInterval(() => {
      this.searchQuery += text[index];
      index++;

      if (index === text.length) {
        // Stop auto-typing when the search query is fully typed out
        clearInterval(intervalId);
      }
    }, 100);
  }
}