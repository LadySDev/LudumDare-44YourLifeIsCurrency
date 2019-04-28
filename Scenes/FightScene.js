import { Player } from '../Characters/Player.js';
import { Enemy1 } from '../Characters/Enemy1.js';
import { Fight } from '../Fight.js';

export class FightScene extends Phaser.Scene{

	constructor(player, enemy, fight) {

		super({ key: 'FightScene'});
				
		this.playerHealthTxt = null;
					
		this.enemyHealthTxt = null;

		FightScene.attackMenuText = null;

		this.changeTurnCoolDown = 2000; //ms

		FightScene.isPlayerTurn = null;
		this.timerPlayerTurn = null;

		this.isEnemyTurn = null;
		this.timerEnemyTurn = null;

	}

	init(data){
	
		FightScene.gameManagerScene = this.scene.get('GameManagerScene');
	
	}

	preload(){
	
		//console.log("preload FightScene");

	}

	create(){
	
		//console.log("create FightScene");
				
		this.playerHealthTxt = this.add.text(0, 0, 'Player Health:', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

		this.enemyHealthTxt = this.add.text(400, 0, 'Enemy Health:', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

		FightScene.attackMenuText = this.add.text(0, 550, 'Attack', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		FightScene.attackMenuText.setInteractive(new Phaser.Geom.Rectangle(0, 0, FightScene.attackMenuText.width, FightScene.attackMenuText.height), Phaser.Geom.Rectangle.Contains);

		FightScene.attackMenuText.on('pointerover', function(pointer){
			FightScene.attackMenuText.setAlpha(0.5);			
		});
		
		FightScene.attackMenuText.on('pointerout', function(pointer){
			FightScene.attackMenuText.setAlpha(1.0);
		});

		FightScene.attackMenuText.on('pointerdown', function(pointer){		
			FightScene.gameManagerScene.fight.setPlayerAction("attack");	
			FightScene.isPlayerTurn = true;
		});

	}

	initHealth(){

		this.playerHealthTxt.text = 'Player Health:' + FightScene.gameManagerScene.player.getHealth();
		this.enemyHealthTxt.text = 'Enemy Health:' + FightScene.gameManagerScene.enemy.getHealth();

	}

	update(time, delta){
	
		//console.log("upload FightScene");
		
		if(FightScene.isPlayerTurn === true){
			
			FightScene.attackMenuText.setVisible(false);

			if(this.timerPlayerTurn === null){
			
				this.timerPlayerTurn = 0;
			
			}

			this.timerPlayerTurn = this.timerPlayerTurn + delta;

		}

		if(this.timerPlayerTurn !== null && this.timerPlayerTurn >= this.changeTurnCoolDown){

			FightScene.isPlayerTurn = false;
			this.timerPlayerTurn = 0;

			this.enemyHealthTxt.text = 'Enemy Health:' + FightScene.gameManagerScene.enemy.getHealth();

			if(FightScene.gameManagerScene.enemy.getHealth() > 0){

				FightScene.gameManagerScene.fight.setEnemyAction();
				this.isEnemyTurn = true;

			}

		}

		if(this.isEnemyTurn === true){

			if(this.timerEnemyTurn === null){
			
				this.timerEnemyTurn = 0;
			
			}

			this.timerEnemyTurn = this.timerEnemyTurn + delta;
				
		}

		if(this.timerEnemyTurn !== null && this.timerEnemyTurn >= this.changeTurnCoolDown){

			this.isEnemyTurn = false;
			this.timerEnemyTurn = 0;

			this.playerHealthTxt.text = 'Player Health:' + FightScene.gameManagerScene.player.getHealth();

			if(FightScene.gameManagerScene.player.getHealth() > 0){

				FightScene.attackMenuText.setVisible(true);

			}

		}

	}

}
