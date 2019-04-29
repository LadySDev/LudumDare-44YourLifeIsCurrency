import { Character } from '../Characters/Character.js';

export class Enemy2 extends Character{

	constructor() {
	
		super();
		this.setHealth(75);
		this.setAttack(75);
		
		this.loot = null;

	}

	setLoot(objects){

		this.loot = objects;

	}

	getLoot(){

		return this.loot;

	}

}