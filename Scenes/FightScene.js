import { Player } from '../Characters/Player.js';
import { Ennemy1 } from '../Characters/Ennemy1.js';

export class FightScene extends Phaser.Scene{

	constructor() {

		super({ key: 'FightScene', actve: true});

		FightScene.player = new Player();
		FightScene.ennemy = new Ennemy1();

	}

	preload(){
	
		//console.log("preload FightScene");

	}

	create(){
	
		//console.log("create FightScene");

	}

	update(){
	
		//console.log("upload FightScene");

	}

}
