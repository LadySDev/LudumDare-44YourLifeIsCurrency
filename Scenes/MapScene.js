export class MapScene extends Phaser.Scene{

	constructor() {

		super({ key: 'MapScene'});
		
		this.coolDownUpgrade = 2000; //ms
				
		this.timerCurrentLevelUpgrading = 0;

	}

	init(data){

		this.gameManagerScene = this.scene.get('GameManagerScene');

		if(data.bool !== null){

			this.isCurrentLevelUpgrading = data.bool;

		}
		else{

			this.isCurrentLevelUpgrading = false;

		}
		

	}
	
	setIsCurrentLevelUpgrading(bool){

		this.isCurrentLevelUpgrading = bool;

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
			this.gameManagerScene.showMainScene(this);
		}, this);
				
		//	LEVEL
		this.txtLevel = this.add.text(380, 300, 'Level ' + this.gameManagerScene.levelManager.getCurrentLevel().getId(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

		// LAST LEVEL ALREADY DONE
		this.imgAlreadyDone = this.add.text(430, 265, 'completed', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.imgAlreadyDone.setRotation(0.5);
		this.imgAlreadyDone.setVisible(false);

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

	update(time, delta){
	
		//console.log("MapScene update");
	
		if(this.isCurrentLevelUpgrading === true){
			
			if(this.btnFight.visible === true){

				this.btnFight.setVisible(false);

			}

			this.timerCurrentLevelUpgrading = this.timerCurrentLevelUpgrading + delta;

		}

		if(this.timerCurrentLevelUpgrading >= this.coolDownUpgrade){

			this.isCurrentLevelUpgrading = false;
			this.timerCurrentLevelUpgrading = 0;

			this.gameManagerScene.levelManager.upgradeCurrentLevel();
			this.txtLevel.text = 'Level ' + this.gameManagerScene.levelManager.getCurrentLevel().getId();

			if(this.gameManagerScene.levelManager.getCurrentLevel().getAlreadyDone() === true){

				this.btnFight.setVisible(false);
				this.imgAlreadyDone.setVisible(true);

			}
			else{

				this.btnFight.setVisible(true);

			}

		}
				
	}

}