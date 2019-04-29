export class MainScene extends Phaser.Scene{

	constructor() {

		super({ key: 'MainScene'});

	}

	init(data){
			
		this.gameManagerScene = this.scene.get('GameManagerScene');
		
	}
	
	preload(){
	
		//console.log("MainScene preload");
	
	}

	create(){
	
		//console.log("MainScene create");

		//	PROFILE
		this.btnProfileTxt = this.add.text(10, 570, 'PROFILE', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.btnProfileTxt.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.btnProfileTxt.width, this.btnProfileTxt.height), Phaser.Geom.Rectangle.Contains);
			
		this.btnProfileTxt.on('pointerover', function(pointer){
			this.btnProfileTxt.setAlpha(0.5);			
		}, this);
		
		this.btnProfileTxt.on('pointerout', function(pointer){
			this.btnProfileTxt.setAlpha(1.0);
		}, this);

		this.btnProfileTxt.on('pointerdown', function(pointer){		
			this.gameManagerScene.showProfileScene(this);
		}, this);
		
		//	SKILLS
		this.btnSkillsTxt = this.add.text(170, 570, 'SKILLS', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.btnSkillsTxt.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.btnSkillsTxt.width, this.btnSkillsTxt.height), Phaser.Geom.Rectangle.Contains);
		
		//	MAP
		this.btnMapTxt = this.add.text(260, 570, 'MAP', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.btnMapTxt.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.btnMapTxt.width, this.btnMapTxt.height), Phaser.Geom.Rectangle.Contains);

		this.btnMapTxt.on('pointerover', function(pointer){
			this.btnMapTxt.setAlpha(0.5);			
		}, this);
		
		this.btnMapTxt.on('pointerout', function(pointer){
			this.btnMapTxt.setAlpha(1.0);
		}, this);

		this.btnMapTxt.on('pointerdown', function(pointer){		
			this.gameManagerScene.showMapScene(this);
		}, this);

		//	SHOP
		this.btnShopTxt = this.add.text(320, 570, 'SHOP', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.btnShopTxt.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.btnShopTxt.width, this.btnShopTxt.height), Phaser.Geom.Rectangle.Contains);

	}

	update(){
	
		//console.log("MainScene update");
	
	}

}