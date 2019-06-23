import { Player } from '../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

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

  navigationExtras: NavigationExtras = {
    queryParams: {
      players: JSON.stringify(this.players),
    }
  };

  constructor(
    public toastController: ToastController,
    public navCtrl: NavController) {
  }

  ngOnInit() { }

  public addPlayer(): void {
    if (!this.playerNameEntered()) {
      return;
    }

    if (this.players.find(x => x.name === this.playerName) !== undefined) {
      this.presentPlayerExistsToast();
      return;
    }

    this.players.push({
      name: this.playerName,
      points: 0
    } as Player);

    this.playerName = '';
  }

  public playerNameEntered(): boolean {
    return (this.playerName !== undefined && this.playerName.length !== 0);
  }

  async presentPlayerExistsToast() {
    const toast = await this.toastController.create({
      message: 'That player was already added',
      color: 'warning',
      duration: 2000
    });
    toast.present();
  }

  public incrementPoints(): void {
    this.goalPoints++;
  }

  public decrementPoints(): void {
    this.goalPoints--;
  }

  public onStartButtonClicked(): void {
    this.navCtrl.navigateForward(['game'], this.navigationExtras);
  }
}
