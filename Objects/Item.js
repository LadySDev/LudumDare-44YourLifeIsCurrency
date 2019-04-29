import { Object } from './Object.js';

export class Item extends Object{

	constructor() {

		super();

		this.setCanUseIt(true);

		this.healthBonus = null;
		
	}

	setHealthBonus(bonus){

		this.healthBonus = bonus;

	}

	getHealthBonus(){

		return this.healthBonus;

	}

}