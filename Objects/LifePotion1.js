import { Item } from './Item.js';

export class LifePotion1 extends Item{

	constructor() {

		super();

		this.setName("LifePotion1");
		this.setHealthBonus(5);
		
	}

}