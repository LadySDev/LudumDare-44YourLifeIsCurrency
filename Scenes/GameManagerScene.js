import { Player } from '../Characters/Player.js';
import { LevelManager } from '../Levels/LevelManager.js';

import { MainScene } from './MainScene.js';
import { MapScene } from './MapScene.js';
import { FightScene } from './FightScene.js';
import { WinScene } from './WinScene.js';
import { LoseScene } from './LoseScene.js';
import { ProfileScene } from './ProfileScene.js';
import { ShopScene } from './ShopScene.js';

export class GameManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameManagerScene', actve: true});
		
		this.player = new Player();	
		this.levelManager = new LevelManager();
		
	}

	showMainScene(parent){
					
		if(this.scene.isActive('LoseScene')){

			parent.scene.sleep('LoseScene');

		}

		parent.scene.start('MainScene');
		parent.scene.sleep('MapScene');

	}

	showProfileScene(parent){

		parent.scene.start('ProfileScene');

	}
	
	showSkillsScene(parent){}

	showMapScene(parent){
						
		parent.scene.start('MapScene');
				
		parent.scene.sleep('MainScene');

	}

	showMapSceneUpgrade(parent){
			
		parent.scene.start('MapScene', {bool: true});
		
		parent.scene.sleep('FightScene');
		parent.scene.sleep('WinScene');

	}

	showShopScene(parent){

		parent.scene.start('ShopScene');						
		parent.scene.sleep('MainScene');

	}

	showFightScene(parent){
		
		parent.scene.start('FightScene');						
		parent.scene.sleep('MapScene');

	}

	showWinScene(parent){

		parent.scene.start('WinScene');
		parent.scene.sleep('FightScene');

	}

	showLoseScene(parent){

		parent.scene.start('LoseScene');
		parent.scene.sleep('FightScene');

	}

	preload(){
	

	
	}

	create(){
	
		this.scene.add('MainScene', MainScene, true);
		this.scene.add('MapScene', MapScene, false);
		this.scene.add('FightScene', FightScene, false);
		this.scene.add('WinScene', WinScene, false);
		this.scene.add('LoseScene', LoseScene, false);
		this.scene.add('ProfileScene', ProfileScene, false);
		this.scene.add('ShopScene', ShopScene, false);

	}

	update(){
	
	
	
	}

}