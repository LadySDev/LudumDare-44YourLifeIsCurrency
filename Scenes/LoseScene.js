export class LoseScene extends Phaser.Scene{

	constructor() {

		super({ key: 'LoseScene'});
		
	}
	
	init(data){}

	preload(){}

	create(){

		//console.log("LoseScene create");

		// TITLE
		this.title = this.add.text(390, 10, 'You Lose!', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

	}

	update(){}

}