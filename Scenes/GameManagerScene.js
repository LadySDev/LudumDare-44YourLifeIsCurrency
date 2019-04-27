import { MainScene } from './MainScene.js';
import { Player } from '../Characters/Player.js';

export class GameManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameManagerScene', actve: true});
		
		this.player = new Player();		
				
		//this.fightScene = new FightScene();

	}

	preload(){
	

	
	}

	create(){
	
		this.scene.add('MainScene', MainScene, true, { x: 0, y: 0 });
	
	}

	update(){
	
	
	
	}

}