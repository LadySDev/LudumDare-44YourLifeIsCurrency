import { Level } from '../Levels/Level.js';
import { Enemy1 } from '../Characters/Enemy1.js';

export class Level1 extends Level{

	constructor() {

		super();

		this.setId(1);
		this.setEnemy(new Enemy1());

	}

}