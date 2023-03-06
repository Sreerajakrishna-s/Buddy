// import { Component } from '@angular/core';

// import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'budddy';

// showNavBar = true;

//   constructor(private router: Router, private activatedRoute: ActivatedRoute) {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         if (this.activatedRoute.snapshot.firstChild.data.hideNavBar) {
//           this.showNavBar = false;
//         } else {
//           this.showNavBar = true;
//         }
//       }
//     });
//   }
  
// }





import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budddy';
  showNavBar = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.activatedRoute.snapshot.firstChild?.data['hideNavBar']) {
          this.showNavBar = false;
        } else {
          this.showNavBar = true;
        }
      }
    });
  }
}
