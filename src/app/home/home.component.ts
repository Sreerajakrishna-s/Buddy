// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//    pop:boolean=false;
//   add:boolean=false;
//   addfu(){
//     this.add=true;
//     this.pop=true;
//   }
//   closeAd() {
//     this.add = false;
//   }
//   searchQuery = '';

//   constructor() { }

//   ngOnInit() {
//     this.autoType();
//   }

//   autoType() {
//     const text = 'Search and Explore....'; // Replace this with your desired search query
//     let index = 0;

//     // Use setInterval to append the next character to searchQuery and move the cursor
//     const intervalId = setInterval(() => {
//       this.searchQuery += text[index];
//       index++;

//       if (index === text.length) {
//         // Stop auto-typing when the search query is fully typed out
//         clearInterval(intervalId);
//       }
//     }, 100);
//   }
// }
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
  searchQuery = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.autoType();
  }

  autoType() {
    const text = 'Search and Explore....'; // Replace this with your desired search query
    let index = 0;

    // Use setInterval to navigate to the search results page when the search query is fully typed out
    const intervalId = setInterval(() => {
      this.searchQuery += text[index];
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
        this.router.navigate(['/search-results'], { queryParams: { query: this.searchQuery } });
      }
    }, 100);
  }

  addfu() {
    this.add = true;
    this.pop = true;
  }

  closeAd() {
    this.add = false;
  }
}



