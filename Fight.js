import { Player } from './Characters/Player.js';

export class Fight{

	constructor(player, ennemy) {
			
		Fight.player = player;
		Fight.playerAction = null;
				
		Fight.ennemy = ennemy;
		Fight.ennemyAction = null;
		
	}

	start(){

		while(Fight.player.getHealth() > 0){

			console.log("player is alive");

		}

		console.log("player is dead");

	}

}
