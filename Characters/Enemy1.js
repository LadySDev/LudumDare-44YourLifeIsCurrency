import { Character } from '../Characters/Character.js';

export class Enemy1 extends Character{

	constructor() {
	
		super();
		this.setHealth(50);
		this.setAttack(25);
		
	}

}