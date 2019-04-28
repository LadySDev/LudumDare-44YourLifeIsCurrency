import { MainScene } from './MainScene.js';
import { Player } from '../Characters/Player.js';
import { LevelManager } from '../Levels/LevelManager.js';
import { MapScene } from './MapScene.js';
import { FightScene } from './FightScene.js';

export class GameManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameManagerScene', actve: true});
		
		this.player = new Player();	
		this.levelManager = new LevelManager();

	}

	showMainScene(parent){
					
		//parent.scene.wake('MainScene');		
		//parent.scene.sleep('MapScene');

	}

	showProfileScene(parent){}
	showBagScene(parent){}
	showSkillsScene(parent){}

	showMapScene(parent){
							
		parent.scene.add('MapScene', MapScene, true);
				
		parent.scene.remove('MainScene');

	}

	showShopScene(parent){}

	showFightScene(parent){
		
		parent.scene.add('FightScene', FightScene, true);
				
		parent.scene.remove('MapScene');

	}

	showWinScene(parent){

		parent.scene.sleep('FightScene');

	}

	showLoseScene(parent){

		parent.scene.sleep('FightScene');

	}

	preload(){
	

	
	}

	create(){
	
		this.scene.add('MainScene', MainScene, true);
		
	}

	update(){
	
	
	
	}

}