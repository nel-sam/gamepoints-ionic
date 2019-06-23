import { Component, OnInit } from '@angular/core';
import { Player } from '../../interfaces/interfaces';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.scss'],
})
export class PlayerEntryComponent implements OnInit {
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
  ];

  constructor() { }

  ngOnInit() {}

}
