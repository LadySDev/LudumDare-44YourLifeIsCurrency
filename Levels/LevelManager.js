import { Level1 } from '../Levels/Level1.js';

export class LevelManager{

	constructor() {

		this.currentLevel = 1;
		this.levels = [];

		this.instantiateLevels();
	}

	getCurrentLevel(){

		if(this.levels.length <= this.currentLevel){

			return this.levels[this.currentLevel - 1];

		}
		else{

			return null;

		}

	}

	upgradeCurrentLevel(){

		this.currentLevel = this.currentLevel + 1;

	}

	instantiateLevels(){

		this.levels.push(new Level1());

	}

	
}