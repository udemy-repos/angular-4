import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  gameEvent = new EventEmitter<number>();

  currentNumber = 1;
  intervalRef: any;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.intervalRef = setInterval(() => {
      this.gameEvent.emit(this.currentNumber++);
    }, 1000);
  }
  
  onStop() {
    clearInterval(this.intervalRef);
  }
}
