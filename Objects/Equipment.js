import { Object } from './Object.js';

export class Equipment extends Object{

	constructor() {

		super();

		this.defenseBonus = null;
		
	}

	setDefenseBonus(bonus){

		this.defenseBonus = bonus;

	}

	getDefenseBonus(){

		return this.defenseBonus;

	}

}