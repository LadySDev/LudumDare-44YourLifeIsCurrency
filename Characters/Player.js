import { Character } from '../Characters/Character.js';
import { Bag } from '../Objects/Bag.js';
import { LifePotion1 } from '../Objects/LifePotion1.js';
import { Helmet1 } from '../Objects/Helmet1.js';
import { Sword1 } from '../Objects/Sword1.js';

export class Player extends Character{

	constructor() {
	
		super();
		this.setHealth(100);
		this.setAttack(25);
		this.setDefense(0);
		this.bag = new Bag();

		this.bag.addObject(new LifePotion1());
		this.bag.addObject(new Helmet1());
		this.bag.addObject(new Sword1());

	}

	getBag(){

		return this.bag;

	}

	useItem(item){

		this.setHealth(this.getHealth() + item.getHealthBonus());

	}

	equip(equipment, bagPos){

		if(equipment.getLocation() === "head"){

			if(this.getHead() !== null){
				this.bag.putObjectAt(this.getHead(), bagPos);
			}

			this.setHead(equipment);

		}
		else if(equipment.getLocation() === "neck"){

			if(this.getNeck() !== null){
				this.bag.putObjectAt(this.getNeck(), bagPos);
			}

			this.setNeck(equipment);

		}
		else if(equipment.getLocation() === "upper"){

			if(this.getUpper() !== null){
				this.bag.putObjectAt(this.getUpper(), bagPos);
			}

			this.setUpper(equipment);

		}
		else if(equipment.getLocation() === "belt"){

			if(this.getBelt() !== null){
				this.bag.putObjectAt(this.getBelt(), bagPos);
			}

			this.setBelt(equipment);

		}
		else if(equipment.getLocation() === "lower"){

			if(this.getLower() !== null){
				this.bag.putObjectAt(this.getLower(), bagPos);
			}

			this.setLower(equipment);

		}
		else if(equipment.getLocation() === "foot"){

			if(this.getFoot() !== null){
				this.bag.putObjectAt(this.getFoot(), bagPos);
			}

			this.setFoot(equipment);

		}
		
		this.setDefense(this.getDefense() + equipment.getDefenseBonus());
		
		this.bag.removeObject(equipment);

	}

	arm(weapon, bagPos, hand){

		if(hand === "handR"){

			if(this.getHandR() !== null){

				this.bag.putObjectAt(this.getHandR(), bagPos);

			}

			this.setHandR(weapon);
		}
		else if(hand === "handL"){

			if(this.getHandL() !== null){

				this.bag.putObjectAt(this.getHandL(), bagPos);

			}

			this.setHandL(weapon);
		}

		this.setAttack(this.getAttack() + weapon.getAttackBonus());

		this.bag.removeObject(weapon);

	}

}
