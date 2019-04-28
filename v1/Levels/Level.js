export class Level{

	constructor() {

		this.id = null;
		this.enemy = null;

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

}