import { Character } from '../Characters/Character.js';
import { Player } from '../Characters/Player.js';
import { Ennemy1 } from '../Characters/Ennemy1.js';
import { Fight } from '../Fight.js';

export class FightScene extends Phaser.Scene{

	constructor() {

		super({ key: 'FightScene', actve: true});

		this.player = new Player();		
		this.playerHealthTxt = null;

		this.ennemy = new Ennemy1();		
		this.ennemyHealthTxt = null;

		FightScene.fight = new Fight(this.player, this.ennemy);

		FightScene.attackMenuText = null;

		this.changeTurnCoolDown = 2000; //ms

		FightScene.isPlayerTurn = null;
		this.timerPlayerTurn = null;

		this.isEnemyTurn = null;
		this.timerEnemyTurn = null;

	}

	getPlayer(){

		return this.player;

	}

	getEnnemy(){

		return this.ennemy;

	}

	preload(){
	
		//console.log("preload FightScene");

	}

	create(){
	
		//console.log("create FightScene");
				
		this.playerHealthTxt = this.add.text(0, 0, 'Player Health:' + this.player.getHealth(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

		this.ennemyHealthTxt = this.add.text(400, 0, 'Ennemy Health:' + this.ennemy.getHealth(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });

		FightScene.attackMenuText = this.add.text(0, 550, 'Attack', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		FightScene.attackMenuText.setInteractive(new Phaser.Geom.Rectangle(0, 0, FightScene.attackMenuText.width, FightScene.attackMenuText.height), Phaser.Geom.Rectangle.Contains);

		FightScene.attackMenuText.on('pointerover', function(pointer){
			FightScene.attackMenuText.setAlpha(0.5);			
		});
		
		FightScene.attackMenuText.on('pointerout', function(pointer){
			FightScene.attackMenuText.setAlpha(1.0);
		});

		FightScene.attackMenuText.on('pointerdown', function(pointer){		
			FightScene.fight.setPlayerAction("attack");	
			FightScene.isPlayerTurn = true;
		});

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

			this.ennemyHealthTxt.text = 'Ennemy Health:' + this.ennemy.getHealth();

			if(this.ennemy.getHealth() > 0){

				FightScene.fight.setEnnemyAction();
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

			this.playerHealthTxt.text = 'Player Health:' + this.player.getHealth();

			if(this.player.getHealth() > 0){

				FightScene.attackMenuText.setVisible(true);

			}

		}

	}

}
