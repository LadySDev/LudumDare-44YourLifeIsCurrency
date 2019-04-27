export class MapScene extends Phaser.Scene{

	constructor() {

		super({ key: 'MapScene'});
		
	}

	init(data){

		MapScene.gameManagerScene = this.scene.get('GameManagerScene');

	}

	preload(){
	
		//console.log("MapScene preload");
	
	}

	create(){
	
		//console.log("MapScene create");
			
		this.add.text(390, 10, 'MAP', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

		MapScene.closeBtn = this.add.text(775, 10, 'X', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		MapScene.closeBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, MapScene.closeBtn.width, MapScene.closeBtn.height), Phaser.Geom.Rectangle.Contains);

		MapScene.closeBtn.on('pointerover', function(pointer){
			MapScene.closeBtn.setAlpha(0.5);			
		});
		
		MapScene.closeBtn.on('pointerout', function(pointer){
			MapScene.closeBtn.setAlpha(1.0);
		});

		MapScene.closeBtn.on('pointerdown', function(pointer){		
			MapScene.gameManagerScene.activeMainScene(this);
		}, this);
	}

	update(){
	
		//console.log("MapScene update");
	
	}

}