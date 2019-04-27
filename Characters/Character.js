export class Character{

	constructor() {

	}

	getHealth(){

		return this.health;

	}

	setHealth(number){
	
		this.health = number;

	}
	
	takeDamage(number){

		this.health = this.health - number;

		if(this.health < 0){

			this.health = 0;

		}

	}

	getAttack(){

		return this.attack;

	}

	setAttack(number){

		this.attack = number;

	}

}
