import { Player } from '../Characters/Player.js';

export class GameManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameManagerScene', actve: true});

		this.player = new Player();		

	}

}