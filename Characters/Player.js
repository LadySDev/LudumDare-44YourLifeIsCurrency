import { Character } from '../Characters/Character.js';

export class Player extends Character{

	constructor() {
	
		super();
		this.setHealth(100);
		this.setAttack(25);
		
	}

}
