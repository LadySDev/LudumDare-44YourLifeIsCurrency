export class Character{

	constructor() {

		this.health = 0;
		this.attack = 0;
		this.defense = 0;
		
		this.head = null;
		this.neck = null;
		this.upper = null;
		this.belt = null;
		this.lower = null;
		this.foot = null;

		this.handL = null;
		this.handR = null;

	}

	getHealth(){

		return this.health;

	}

	setHealth(number){
	
		this.health = number;

	}
		
	getAttack(){

		return this.attack;

	}

	setAttack(number){

		this.attack = number;

	}

	setDefense(number){

		this.defense = number;

	}

	getDefense(){

		return this.defense;

	}
		
	setHead(equipment){

		this.head = equipment;

	}

	getHead(){

		return this.head;

	}

	setNeck(equipment){

		this.neck = equipment;

	}

	getNeck(){

		return this.neck;

	}

	setUpper(equipment){

		this.upper = equipment;

	}

	getUpper(){

		return this.upper;

	}

	setBelt(equipment){

		this.belt = equipment;

	}

	getBelt(){

		return this.belt;

	}

	setLower(equipment){

		this.lower = equipment;

	}

	getLower(){

		return this.lower;

	}

	setFoot(equipment){

		this.foot = equipment;

	}

	getFoot(){

		return this.foot;

	}

	setHandL(equipment){

		this.handL = equipment;

	}

	getHandL(){

		return this.handL;

	}

	setHandR(equipment){

		this.handR = equipment;

	}

	getHandR(){

		return this.handR;

	}

	takeDamage(number){

		if(number - this.defense > 0){

			this.health = this.health - (number - this.defense);

			if(this.health < 0){

				this.health = 0;

			}

		}

	}

}
