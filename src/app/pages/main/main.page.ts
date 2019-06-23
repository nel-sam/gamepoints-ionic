import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  public onStartGameClick(): void {
  }

  public needsPlayers(): boolean {
    return true;
  }
}
