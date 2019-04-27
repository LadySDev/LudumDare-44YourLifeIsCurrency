import { Character } from './Characters/Character.js';

export class Fight{

	constructor(player, ennemy) {
			
		this.actionsStr = [];

		this.player = player;
		this.playerAction = null;
				
		this.ennemy = ennemy;
		this.ennemyAction = null;
		
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

			this.ennemy.takeDamage(this.player.getAttack());

			this.actionsStr.push("The Enemy take " + this.player.getAttack() + " damages!");

		}

		if(this.playerAction !== null){

			this.playerAction = null;			

		}
		
		if(this.ennemy.getHealth() === 0){

			this.actionsStr.push("You Won!");

		}

	}

	setEnnemyAction(){

		this.ennemyAction = "attack";
		this.executeEnnemyAction();

	}

	executeEnnemyAction(){
		
		if(this.actionsStr.length > 0){

			this.actionsStr = [];

		}

		if(this.ennemyAction === "attack"){

			this.actionsStr.push("The Enemy choosed the action: Attack.");

			this.player.takeDamage(this.ennemy.getAttack());

			this.actionsStr.push("You take " + this.ennemy.getAttack() + " damages!");

		}

		if(this.ennemyAction !== null){

			this.ennemyAction = null;

		}

		if(this.player.getHealth() === 0){

			this.actionsStr.push("You Lose!");

		}

	}

}
