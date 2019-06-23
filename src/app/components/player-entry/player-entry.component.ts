import { Component, OnInit } from '@angular/core';
import { Player } from '../../interfaces/interfaces';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.scss'],
})
export class PlayerEntryComponent implements OnInit {
  playerName: string;
  goalPoints = 10;

  players: Player[] = [
    {
      name: "悪魔さん",
      points: 0
    } as Player,
    {
      name: "Concepción",
      points: 0
    } as Player,
    {
      name: "안다",
      points: 0
    } as Player,
    {
      name: "Donny",
      points: 0
    } as Player,
    {
      name: "馬鹿野郎",
      points: 0
    } as Player,
    {
      name: "Good Hombre",
      points: 0
    } as Player,
  ];

  constructor() { }

  ngOnInit() {}

  public addPlayer(): void {
    if (this.playerName === undefined || this.playerName.length === 0) {
      return;
    }

    this.players.push({
      name: this.playerName,
      points: 0
    } as Player);

    this.playerName = '';
  }

  public incrementPoints(): void {
    this.goalPoints++;
  }

  public decrementPoints(): void {
    this.goalPoints--;
  }
}
