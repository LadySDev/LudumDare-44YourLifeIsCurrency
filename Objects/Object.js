export class Object{

	constructor() {

		this.name = null;
		this.canUseIt = false;
		this.canEquipIt = false;
		this.canArmIt = false;
		this.price = 0;

	}

	setName(name){

		this.name = name;

	}

	getName(){

		return this.name;

	}

	setCanUseIt(bool){

		this.canUseIt = bool;

	}

	getCanUseIt(){

		return this.canUseIt;

	}

	setCanEquipIt(bool){

		this.canEquipIt = bool;

	}

	getCanEquipIt(){

		return this.canEquipIt;

	}

	setCanArmIt(bool){

		this.canArmIt = bool;

	}

	getCanArmIt(){

		return this.canArmIt;

	}

	setPrice(price){

		this.price = price;

	}

	getPrice(){

		return this.price;

	}

}