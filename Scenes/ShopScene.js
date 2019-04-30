import { Bag } from '../Objects/Bag.js';
import { Helmet1 } from '../Objects/Helmet1.js';
import { Sword1 } from '../Objects/Sword1.js';

export class ShopScene extends Phaser.Scene{

	constructor() {

		super({ key: 'ShopScene'});
					
		this.rows = 6;
		this.cols = 5;

		this.cellsBoard = [];

		this.shop = new Bag();
		this.shop.addObject(new Helmet1());
		this.shop.addObject(new Sword1());

		this.shopTxt = [];

		this.mustReDraw = false;		

	}

	init(data){

		this.gameManagerScene = this.scene.get('GameManagerScene');

		this.player = this.gameManagerScene.player;
		this.bag = this.player.getBag();
				
	}

	preload(){
	
		//console.log("ShopScene preload");
	
	}

	drawRect(parent, posX, posY){
	
		var rect = this.add.rectangle(posX, posY, 60, 60);					
		rect.setFillStyle(0xffffff, 0.5);

		rect.setInteractive(new Phaser.Geom.Rectangle(0, 0, rect.width, rect.height), Phaser.Geom.Rectangle.Contains);

		rect.on('pointerover', function(pointer){
			if(this.mousePointer !== null && rect.fillAlpha === 0.5){
				rect.setFillStyle(0xffffff, 0.25);
			}
		}, this);

		rect.on('pointerout', function(pointer){
			if(rect.fillAlpha === 0.25){
				rect.setFillStyle(0xffffff, 0.5);
			}
		}, this);

		rect.on('pointerup', function(pointer){
			this.resetCellsColor();
			rect.setFillStyle(0xffffff, 0.15);
			//this.drawOption(parent, rect);
		}, this);

		return rect;

	}

	//	SHOP	
	drawShopBoard(parent){
	
		for(var r = 0; r < this.rows; r++){		
			this.cellsBoard[r] = [];
			for(var c = 0; c < this.cols; c++){

				var posX = 400 - (this.cols/2) * 64 + c * 64;
				var posY = 340 - (64 * 3) + 2 + r * 64;

				this.cellsBoard[r][c] = this.drawRect(parent, posX, posY);

			}

		}

	}

	destroyShopBoard(){
	
		for(var r = 0; r < this.rows; r++){				
			for(var c = 0; c < this.cols; c++){

				this.cellsBoard[r][c].destroy();

			}

		}

		this.cellsBoard = [];

	}

	drawShopItem(parent, posX, posY, r, c){

		var objectPos = c + (r * (this.cols + 1));

		var text1 = this.add.text(0, 0 + 20 - 6, this.shop.getObjectList()[objectPos].getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00', align: 'center'});		
		text1.setInteractive(new Phaser.Geom.Rectangle(0, 0, text1.width, text1.height), Phaser.Geom.Rectangle.Contains);
					
		var text2 = this.add.text(0, 0 + 50 - 6, "cost: " + this.shop.getObjectList()[objectPos].getPrice(), { fontFamily: 'Arial', fontSize: 10, color: '#00ff00', align: 'center'});		
		text2.setInteractive(new Phaser.Geom.Rectangle(0, 0, text2.width, text2.height), Phaser.Geom.Rectangle.Contains);

		var container = this.add.container(posX, posY);
		container.add(text1);
		container.add(text2);

		
		container.on('pointerdown', function(pointer){
			
		}, this);

		container.on('pointerup', function(pointer){							
			
		}, this);

		return container;
		
	}

	drawShopItems(parent){
	
		for(var r = 0; r < this.rows; r++){			
			this.shopTxt[r] = [];
			for(var c = 0; c < this.cols; c++){

				var posX = 400 - (this.cols/2) * 64 + c * 64 - 30;
				var posY = 340 - (64 * 3) + 2 + r * 64 - 30;

				var objectPos = c + (r * (this.cols + 1));

				if(this.shop.getObjectList()[objectPos] !== undefined && this.shop.getObjectList()[objectPos] !== null){
				
					this.shopTxt[r][c] = this.drawShopItem(parent, posX, posY, r, c);

				}
				else{

					this.shopTxt[r][c] = undefined;

				}
				
			}

		}
	
	}

	destroyShopItems(){}

	//	INVENTORY
	drawBagBoard(){}

	destroyBagBoard(){}

	drawBagItem(){}

	drawBagItems(){}

	destroyBagItems(){}

	create(){
	
		//console.log("ShopScene create");

		// MAIN
		this.btnMain = this.add.text(775, 10, 'X', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' });
		this.btnMain.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.btnMain.width, this.btnMain.height), Phaser.Geom.Rectangle.Contains);

		this.btnMain.on('pointerover', function(pointer){
			this.btnMain.setAlpha(0.5);			
		}, this);
		
		this.btnMain.on('pointerout', function(pointer){
			this.btnMain.setAlpha(1.0);
		}, this);

		this.btnMain.on('pointerdown', function(pointer){		
			this.gameManagerScene.showMainScene(this);
		}, this);
		
		//	PLAYER HEALTH
		this.playerHealthTxt = this.add.text(400 - 50, 60, 'Health: ' + this.player.getHealth(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});
		
		this.drawShopBoard(parent);
		this.drawShopItems(parent);

		this.btnShop = this.add.text(400 - 60, 600 - 70, 'SHOP', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});
		this.btnBag = this.add.text(400 + 5, 600 - 70, 'BAG', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});
		
	}

	update(time, delta){
	
		//console.log("ShopScene update");

	}

}