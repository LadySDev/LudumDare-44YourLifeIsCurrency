import { Player } from '../Characters/Player.js';
import { Enemy1 } from '../Characters/Enemy1.js';
import { Fight } from '../Fight.js';

export class FightScene extends Phaser.Scene{

	constructor() {

		super({ key: 'FightScene'});
								
		this.changeTurnCoolDown = 2000; //ms
				
		this.isPlayerTurn = false;
		this.timerPlayerTurn = 0;
		this.isEnemyTurn = false;
		this.timerEnemyTurn = 0;
		this.isFightOver = false;
		this.timerFightOver = 0;
	}

	init(data){
	
		this.gameManagerScene = this.scene.get('GameManagerScene');
	
		this.player = this.gameManagerScene.player;
		this.enemy = this.gameManagerScene.levelManager.getCurrentLevel().getEnemy();

		this.fight = new Fight(this.player, this.enemy);

	}

	preload(){
	
		//console.log("preload FightScene");

	}

	create(){
	
		//console.log("create FightScene");
				
		//	PLAYER HEALTH
		this.playerHealthTxt = this.add.text(0, 0, 'Player Health:' + this.player.getHealth(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

		//	ENEMY HEALTH
		this.enemyHealthTxt = this.add.text(400, 0, 'Enemy Health:' + this.enemy.getHealth(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

		//	ACTION MENU
		this.btnAttackTxt = this.add.text(0, 550, 'Attack', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.btnAttackTxt.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.btnAttackTxt.width, this.btnAttackTxt.height), Phaser.Geom.Rectangle.Contains);

		this.btnAttackTxt.on('pointerover', function(pointer){
			this.btnAttackTxt.setAlpha(0.5);			
		}, this);
		
		this.btnAttackTxt.on('pointerout', function(pointer){
			this.btnAttackTxt.setAlpha(1.0);
		}, this);

		this.btnAttackTxt.on('pointerdown', function(pointer){		
			this.fight.setPlayerAction("attack");	
			this.isPlayerTurn = true;
		}, this);

	}

	update(time, delta){
	
		//console.log("upload FightScene");
		

		//	PLAYER TURN
		if(this.isPlayerTurn === true){
			
			this.btnAttackTxt.setVisible(false);
						
			this.timerPlayerTurn = this.timerPlayerTurn + delta;

		}

		if(this.timerPlayerTurn !== null && this.timerPlayerTurn >= this.changeTurnCoolDown){

			this.isPlayerTurn = false;
			this.timerPlayerTurn = 0;
			
			this.enemyHealthTxt.text = 'Enemy Health:' + this.enemy.getHealth();

			if(this.enemy.getHealth() > 0){

				this.fight.setEnemyAction();
				this.isEnemyTurn = true;

			}
			else{

				this.isFightOver = true;

			}
						
		}
		
		//	ENEMY TURN
		if(this.isEnemyTurn === true){

			this.timerEnemyTurn = this.timerEnemyTurn + delta;
				
		}

		if(this.timerEnemyTurn !== null && this.timerEnemyTurn >= this.changeTurnCoolDown){

			this.isEnemyTurn = false;
			this.timerEnemyTurn = 0;

			this.playerHealthTxt.text = 'Player Health:' + this.player.getHealth();

			if(this.player.getHealth() > 0){

				this.btnAttackTxt.setVisible(true);

			}
			else{

				this.isFightOver = true;

			}

		}

		//	WIN / LOSE
		if(this.isFightOver === true){

			this.timerFightOver = this.timerFightOver + delta;

		}

		if(this.timerFightOver !== null && this.timerFightOver >= this.changeTurnCoolDown){

			this.isFightOver = false;
			this.timerFightOver = 0;

			if(this.player.getHealth() === 0){

				this.gameManagerScene.showLoseScene(this);

			}
			else{

				this.gameManagerScene.levelManager.getCurrentLevel().setAlreadyDone(true);
				this.gameManagerScene.showWinScene(this);

			}

		}

	}

}
