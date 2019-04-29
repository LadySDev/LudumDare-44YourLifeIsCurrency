import { Object } from './Object.js';

export class Equipment extends Object{

	constructor() {

		super();

		this.canEquipIt = true;

		this.defenseBonus = null;
		this.location = null;

	}

	setDefenseBonus(bonus){

		this.defenseBonus = bonus;

	}

	getDefenseBonus(){

		return this.defenseBonus;

	}

	setLocation(location){

		this.location = location;

	}

	getLocation(){

		return this.location;

	}

}