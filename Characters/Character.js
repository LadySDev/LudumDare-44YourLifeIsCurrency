export class Character{

	constructor() {

		Character.health = null;
		Character.attack = null;

	}

	getHealth(){

		return Character.health;

	}

	setHealth(number){
	
		Character.health = number;

	}
	
	takeDamage(number){

		Character.health = Character.health - number;

		if(Character.health < 0){

			Character.health = 0;

		}

	}

	getAttack(){

		return Character.attack;

	}

}
