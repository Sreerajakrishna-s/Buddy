import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardModalService {
  private cardSource = new BehaviorSubject(null);
  card = this.cardSource.asObservable();

  constructor() {}

  showCard(card: any) {
    this.cardSource.next(card);
  }

  hideCard() {
    this.cardSource.next(null);
  }
}