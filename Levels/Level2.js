import { Level } from '../Levels/Level.js';
import { Enemy2 } from '../Characters/Enemy2.js';

export class Level2 extends Level{

	constructor() {

		super();

		this.setId(2);
		this.setEnemy(new Enemy2());

	}

}