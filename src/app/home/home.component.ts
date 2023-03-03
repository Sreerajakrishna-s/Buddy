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
  searchTerm: string = '';
  items: any[] = [
    { id: 1, name: ['themepark', 'theme'], url: '/theme' },
    { id: 2, name: 'Item 2', url: '/item-2' },
    { id: 3, name: 'Item 3', url: '/item-3' },
    { id: 4, name: 'Item 4', url: '/item-4' },
  ];
  
  get filteredItems() {
    return this.items.filter(item => item.name.includes(this.searchTerm)).map(item => item.url);
  }
  onSearch() {
    const filteredItems = this.items.filter(item => item.name.includes(this.searchTerm)).map(item => item.url);
    if (filteredItems.length > 0) {
      this.router.navigate([filteredItems[0]]);
    }
  }
  
  constructor(private router: Router) { }

  ngOnInit() {
 
  }


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



