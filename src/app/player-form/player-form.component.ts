import { Component } from '@angular/core';

import { Player } from '../player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {

  positions = ['Goleiro', 'Defensor',
            'Meia', 'Atacante'];

  model = new Player(1, '', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newPlayer() {
    this.model = new Player(2, '', '', '', '');
  }

}
