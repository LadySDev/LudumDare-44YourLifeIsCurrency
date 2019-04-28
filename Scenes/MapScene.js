export class MapScene extends Phaser.Scene{

	constructor() {

		super({ key: 'MapScene'});
		
	}

	init(data){

		this.gameManagerScene = this.scene.get('GameManagerScene');

	}

	preload(){
	
		//console.log("MapScene preload");
	
	}

	create(){
	
		//console.log("MapScene create");
			
		// TITLE
		this.title = this.add.text(390, 10, 'MAP', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		
		// MAIN
		this.btnMain = this.add.text(775, 10, 'X', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.btnMain.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.btnMain.width, this.btnMain.height), Phaser.Geom.Rectangle.Contains);

		this.btnMain.on('pointerover', function(pointer){
			this.btnMain.setAlpha(0.5);			
		}, this);
		
		this.btnMain.on('pointerout', function(pointer){
			this.btnMain.setAlpha(1.0);
		}, this);

		this.btnMain.on('pointerdown', function(pointer){		
			this.gameManagerScene.activeMainScene(this);
		}, this);
		
		//	LEVEL 1
		this.btnLevel1 = this.add.text(380, 300, 'Level 1', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		
		//	FIGHT
		this.btnFight = this.add.text(380, 570, 'FIGHT', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.btnFight.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.btnFight.width, this.btnFight.height), Phaser.Geom.Rectangle.Contains);

		this.btnFight.on('pointerover', function(pointer){
			this.btnFight.setAlpha(0.5);			
		}, this);
		
		this.btnFight.on('pointerout', function(pointer){
			this.btnFight.setAlpha(1.0);
		}, this);

		this.btnFight.on('pointerdown', function(pointer){		
			this.gameManagerScene.showFightScene(this);
		}, this);

	}

	update(){
	
		//console.log("MapScene update");
	
	}

}