import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showWelcome = true;

  constructor() {}

  onStartGameClick(): void {
    this.showWelcome = false;
  }

}
