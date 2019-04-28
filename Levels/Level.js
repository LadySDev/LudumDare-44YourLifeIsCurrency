export class Level{

	constructor() {

		this.id = null;
		this.enemy = null;
		this.alreadyDone = false;

	}

	setId(number){

		this.id = number;

	}

	getId(){

		return this.id;

	}

	setEnemy(enemy){

		this.enemy = enemy;

	}

	getEnemy(){

		return this.enemy;

	}

	setAlreadyDone(bool){

		this.alreadyDone = bool;

	}

	getAlreadyDone(){
	
		return this.alreadyDone;

	}

}