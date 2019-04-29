export class Bag{

	constructor() {

		this.objectList = new array(10);
		
	}

	addObject(object){

		this.objectList.push(object);

	}

	moveObject(object, position){

		var position1 = this.objectList.indexOf(object);
		var object2 = this.objectList[position];

		this.objectList[position] = object;
		this.objectList[position1] = object2;

	}

	removeObject(object){

		var position = this.objectList.indexOf(object);

		this.objectList[position] = null;

	}

}