export class WinScene extends Phaser.Scene{

	constructor() {

		super({ key: 'WinScene'});
		
		this.coolDown = 1500; //ms
		this.coolDown2 = 2 * this.coolDown; //ms

		this.canBackToMap = false;
		this.timerBackToMap = 0;

		this.anyLoot = false;
		this.timerAnyLoot = 0;

	}

	init(data){
	
		this.gameManagerScene = this.scene.get('GameManagerScene');
	
		this.loot = this.scene.get('FightScene').enemy.getLoot();
		
		if(this.loot !== null){

			this.anyLoot = true;

		}
		
	}

	preload(){}

	create(){

		//console.log("WinScene create");

		// TITLE
		this.title = this.add.text(390, 10, 'You Win!', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
				
		//	LOOT
		this.lootTxt = this.add.text(390, 290, "", { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.lootTxt.setVisible(false);

	}

	update(time, delta){

		//	 LOOT
		if(this.anyLoot === true){

			this.timerAnyLoot = this.timerAnyLoot + delta;
			
		}

		if(this.timerAnyLoot >= this.coolDown){

			this.lootTxt.text = "+ " + this.loot.getName();
			this.lootTxt.setVisible(true);

		}
		
		if(this.timerAnyLoot >= this.coolDown2){

			this.anyLoot = false;
			this.timerAnyLoot = 0;

			this.lootTxt.setVisible(false);

			this.canBackToMap = true;

		}

		// REDIRECTION
		if(this.canBackToMap === true){

			this.timerBackToMap = this.timerBackToMap + delta;

		}
		
		if(this.timerBackToMap >= this.coolDown){

			this.canBackToMap = false;
			this.timerBackToMap = 0;

			this.gameManagerScene.showMapSceneUpgrade(this);

		}

	}

}