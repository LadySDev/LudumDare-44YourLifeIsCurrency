import { Character } from '../Characters/Character.js';
import { Bag } from '../Objects/Bag.js';

export class Player extends Character{

	constructor() {
	
		super();
		this.setHealth(100);
		this.setAttack(25);
		this.bag = new Bag();

	}

	getBag(){

		return this.bag;

	}

}
