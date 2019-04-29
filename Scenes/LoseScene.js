export class LoseScene extends Phaser.Scene{

	constructor() {

		super({ key: 'LoseScene'});
		
		this.coolDown = 2000; //ms

		this.timerBackToMain = 0;

	}
	
	init(data){

		this.gameManagerScene = this.scene.get('GameManagerScene');

	}

	preload(){}

	create(){

		//console.log("LoseScene create");

		// TITLE
		this.title = this.add.text(390, 10, 'You Lose!', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

	}

	update(time, delta){

		this.timerBackToMain = this.timerBackToMain + delta;

		if(this.timerBackToMain >= this.coolDown){
			
			var fightScene = this.scene.get('FightScene');					
			this.gameManagerScene.player.setHealth(fightScene.fight.playerHealthBeforeFight);
			
			this.gameManagerScene.showMainScene(this);

		}

	}

}