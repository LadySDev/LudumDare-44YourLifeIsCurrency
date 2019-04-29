import { Character } from '../Characters/Character.js';
import { LifePotion1 } from '../Objects/LifePotion1.js';

export class Enemy1 extends Character{

	constructor() {
	
		super();
		this.setHealth(50);
		this.setAttack(25);
		this.setDefense(0);
		this.loot = new LifePotion1();

	}

	setLoot(objects){

		this.loot = objects;

	}

	getLoot(){

		return this.loot;

	}

}