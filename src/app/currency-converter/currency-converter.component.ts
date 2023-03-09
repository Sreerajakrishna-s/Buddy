import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  currencies = ['USD', 'EUR', 'GBP', 'INR'];
  amount: number = 0;
  selectedCurrency: 'USD' | 'EUR' | 'GBP' | 'INR' = 'USD';
  conversionRate: number = 1;
  exchangeRates = {
    USD: 1,
    EUR: 0.8,
    GBP: 0.7,
    INR: 75.9
  };

 updateConversionRate() {
  this.conversionRate = this.exchangeRates['INR'] / this.exchangeRates[this.selectedCurrency];
}
submitted = false;

constructor(private location: Location) {}

onSubmit(): void {
  // your form submission logic here
  this.submitted = true;
}

goBack(): void {
  this.location.back();
}

}

