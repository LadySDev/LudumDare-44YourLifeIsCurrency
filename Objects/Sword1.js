import { Weapon } from './Weapon.js';

export class Sword1 extends Weapon{

	constructor() {

		super();

		this.setName("Sword1");
		this.setAttackBonus(5);
		this.setPrice(10);
		
	}

}