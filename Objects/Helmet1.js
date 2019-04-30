import { Equipment } from './Equipment.js';

export class Helmet1 extends Equipment{

	constructor() {

		super();

		this.setName("Helmet1");
		this.setDefenseBonus(5);
		this.setLocation("head");
		this.setPrice(5);
		
	}

}