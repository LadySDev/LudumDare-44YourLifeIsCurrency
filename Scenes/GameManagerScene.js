import { MainScene } from './MainScene.js';
import { Player } from '../Characters/Player.js';
import { MapScene } from './MapScene.js';

export class GameManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameManagerScene', actve: true});
		
		this.player = new Player();		
				
		//this.fightScene = new FightScene();

	}

	activeMainScene(parent){
					
		parent.scene.wake('MainScene');
		
		parent.scene.sleep('MapScene');

	}

	activeMapScene(parent){
					
		parent.scene.wake('MapScene');
		
		parent.scene.sleep('MainScene');

	}

	preload(){
	

	
	}

	create(){
	
		this.mainScene = this.scene.add('MainScene', MainScene, true);
		
		this.currentScene = "MainScene";

		this.mapScene = this.scene.add('MapScene', MapScene, true, { scene: GameManagerScene});
		this.scene.sleep('MapScene');
	}

	update(){
	
	
	
	}

}