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

	activeMainScene(parent){
					
		parent.scene.wake('MainScene');
		
		parent.scene.sleep('MapScene');

	}

	activeMapScene(parent){
					
		parent.scene.wake('MapScene');
		
		parent.scene.sleep('MainScene');

	}

	activeFightScene(parent){

		this.currentLevel = this.levelManager.getCurrentLevel();
		this.enemy = this.currentLevel.getEnemy();
		this.fight = new Fight(this.player, this.enemy);

		parent.scene.wake('FightScene');

		parent.scene.sleep('MapScene');

	}

	preload(){
	

	
	}

	create(){
	
		this.mainScene = this.scene.add('MainScene', MainScene, true);
		
		this.mapScene = this.scene.add('MapScene', MapScene, true, { scene: GameManagerScene});
		this.scene.sleep('MapScene');

		this.mapScene = this.scene.add('FightScene', FightScene, true, { scene: GameManagerScene});
		this.scene.sleep('FightScene');

	}

	update(){
	
	
	
	}

}