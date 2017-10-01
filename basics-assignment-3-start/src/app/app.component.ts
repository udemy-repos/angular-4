import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  togglesLog = [];

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.togglesLog.push(this.togglesLog.length + 1);
  }

  getBackgroundColor(log: number): string {
    if (log >= 5) {
      return 'blue';
    }

    return 'white';
  }

  applyWhiteFont(log: number): boolean {
    if (log >= 5) {
      return true;
    }
    return false;
  }
}
