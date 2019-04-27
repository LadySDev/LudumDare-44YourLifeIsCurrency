export class MainScene extends Phaser.Scene{

	constructor() {

		super({ key: 'MainScene'});

	}

	init(data){
			
		MainScene.gameManagerScene = this.scene.get('GameManagerScene');
		
	}

	preload(){
	
		//console.log("MainScene preload");
	
	}

	create(){
	
		//console.log("MainScene create");

		MainScene.profileMenuText = this.add.text(10, 570, 'PROFILE', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		MainScene.profileMenuText.setInteractive(new Phaser.Geom.Rectangle(0, 0, MainScene.profileMenuText.width, MainScene.profileMenuText.height), Phaser.Geom.Rectangle.Contains);
	
		MainScene.skillsMenuText = this.add.text(110, 570, 'SKILLS', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		MainScene.skillsMenuText.setInteractive(new Phaser.Geom.Rectangle(0, 0, MainScene.skillsMenuText.width, MainScene.skillsMenuText.height), Phaser.Geom.Rectangle.Contains);

		MainScene.bagMenuText = this.add.text(200, 570, 'BAG', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		MainScene.bagMenuText.setInteractive(new Phaser.Geom.Rectangle(0, 0, MainScene.bagMenuText.width, MainScene.bagMenuText.height), Phaser.Geom.Rectangle.Contains);

		MainScene.mapMenuText = this.add.text(260, 570, 'MAP', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		MainScene.mapMenuText.setInteractive(new Phaser.Geom.Rectangle(0, 0, MainScene.mapMenuText.width, MainScene.mapMenuText.height), Phaser.Geom.Rectangle.Contains);

		MainScene.mapMenuText.on('pointerover', function(pointer){
			MainScene.mapMenuText.setAlpha(0.5);			
		});
		
		MainScene.mapMenuText.on('pointerout', function(pointer){
			MainScene.mapMenuText.setAlpha(1.0);
		});

		MainScene.mapMenuText.on('pointerdown', function(pointer){		
			MainScene.gameManagerScene.activeMapScene(this);
		}, this);

		MainScene.shopMenuText = this.add.text(320, 570, 'SHOP', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		MainScene.shopMenuText.setInteractive(new Phaser.Geom.Rectangle(0, 0, MainScene.shopMenuText.width, MainScene.shopMenuText.height), Phaser.Geom.Rectangle.Contains);

	}

	update(){
	
		//console.log("MainScene update");
	
	}

}