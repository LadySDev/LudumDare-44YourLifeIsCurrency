import { Player } from '../Characters/Player.js';

export class FightScene extends Phaser.Scene{

	constructor() {

		super({ key: 'FightScene', actve: true});

		FightScene.player = new Player();
		
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
