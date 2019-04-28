import { Level1 } from '../Levels/Level1.js';

export class LevelManager{

	constructor() {

		this.currentLevel = 1;
		this.levels = [];

		this.initLevels();
	}

	initLevels(){

		this.levels.push(new Level1());

	}

	movingToTheNextLevel(){

		this.currentLevel = this.currentLevel + 1;

	}

}