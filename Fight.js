import { Character } from './Characters/Character.js';

export class Fight{

	constructor(player, enemy) {
			
		this.actionsStr = [];

		this.player = player;
		this.playerAction = null;
				
		this.playerHealthBeforeFight = this.player.getHealth();

		this.enemy = enemy;
		this.enemyAction = null;
		
	}

	setPlayerAction(action){
		
		this.playerAction = action;

		this.executePlayerAction();

	}
		
	executePlayerAction(){
		
		if(this.actionsStr.length > 0){

			this.actionsStr = [];

		}

		if(this.playerAction === "attack"){

			this.actionsStr.push("You choosed the action: Attack.");

			this.enemy.takeDamage(this.player.getAttack());

			this.actionsStr.push("The Enemy take " + this.player.getAttack() + " damages!");

		}

		if(this.playerAction !== null){

			this.playerAction = null;			

		}
		
		if(this.enemy.getHealth() === 0){

			//this.actionsStr.push("You Won!");

			if(this.enemy.getLoot() !== null){

				this.player.getBag().addObject(this.enemy.getLoot());
				
			}

		}

	}

	setEnemyAction(){
		
		this.enemyAction = "attack";
		this.executeEnemyAction();

	}

	executeEnemyAction(){
		
		if(this.actionsStr.length > 0){

			this.actionsStr = [];

		}

		if(this.enemyAction === "attack"){

			this.actionsStr.push("The Enemy choosed the action: Attack.");

			this.player.takeDamage(this.enemy.getAttack());

			this.actionsStr.push("You take " + this.enemy.getAttack() + " damages!");

		}

		if(this.enemyAction !== null){

			this.enemyAction = null;

		}

		if(this.player.getHealth() === 0){

			//this.actionsStr.push("You Lose!");

		}

	}

}
