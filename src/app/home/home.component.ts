// import { Component ,ViewChild, ElementRef,  NgZone  } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   @ViewChild('searchBar', {static: false}) searchBar: ElementRef;

//   searchText = 'Type your search text here';

//   constructor(private ngZone: NgZone) {}

//   autoType() {
//     // Get the input element and set its value to the searchText variable
//     const inputElement = this.searchBar.nativeElement;
//     inputElement.value = this.searchText;

//     // Trigger the keyup event
//     const event = new KeyboardEvent('keyup', { key: 'Enter' });

//     // Use ngZone to run the event dispatching code outside of the Angular zone
//     this.ngZone.run(() => {
//       inputElement.dispatchEvent(event);
//     });
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  searchQuery = '';

  constructor() { }

  ngOnInit() {
    this.autoType();
  }

  autoType() {
    const text = 'Confused Where To Go....'; // Replace this with your desired search query
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

