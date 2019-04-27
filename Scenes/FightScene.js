import { Player } from '../Characters/Player.js';
import { Ennemy1 } from '../Characters/Ennemy1.js';
import { Fight } from '../Fight.js';

export class FightScene extends Phaser.Scene{

	constructor() {

		super({ key: 'FightScene', actve: true});

		FightScene.player = new Player();
		FightScene.ennemy = new Ennemy1();
		FightScene.fight = new Fight(FightScene.player, FightScene.ennemy);

	}

	preload(){
	
		//console.log("preload FightScene");

	}

	create(){
	
		//console.log("create FightScene");

		FightScene.fight.start();

	}

	update(){
	
		//console.log("upload FightScene");

	}

}
