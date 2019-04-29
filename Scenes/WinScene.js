export class WinScene extends Phaser.Scene{

	constructor() {

		super({ key: 'WinScene'});
		
		this.coolDown = 2000; //ms

		this.timerBackToMap = 0;

	}

	init(data){
	
		this.gameManagerScene = this.scene.get('GameManagerScene');
	
	}

	preload(){}

	create(){

		//console.log("WinScene create");

		// TITLE
		this.title = this.add.text(390, 10, 'You Win!', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
				
	}

	update(time, delta){

		this.timerBackToMap = this.timerBackToMap + delta;

		if(this.timerBackToMap >= this.coolDown){

			this.gameManagerScene.showMapSceneUpgrade(this);

		}

	}

}