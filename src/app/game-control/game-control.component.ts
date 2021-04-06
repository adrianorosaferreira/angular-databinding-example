import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  lastNumber = 0;
  @Output() lastNumberEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.lastNumberEvent.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.interval);
  }

}
