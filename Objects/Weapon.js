import { Object } from './Object.js';

export class Weapon extends Object{

	constructor() {

		super();

		this.attackBonus = null;
		
	}

	setAttackBonus(bonus){

		this.attackBonus = bonus;

	}

	getAttackBonus(){

		return this.attackBonus;

	}

}