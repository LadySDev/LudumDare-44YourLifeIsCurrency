export class Character{

	constructor() {

		Character.health = null;
		Character.attack = null;

	}

	getHealth(){

		return Character.health;

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
