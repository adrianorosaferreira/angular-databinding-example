import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onLastNumberEvent(lastNumber: number): void {
    if (lastNumber % 2) {
      this.oddNumbers.push(lastNumber);
    } else {
      this.evenNumbers.push(lastNumber);
    }
  }
}
