export class ProfileScene extends Phaser.Scene{

	constructor() {

		super({ key: 'ProfileScene'});
						
	}

	init(data){

		this.gameManagerScene = this.scene.get('GameManagerScene');

		this.player = this.gameManagerScene.player;
		this.bag = this.player.getBag();

		this.rows = 6;
		this.cols = 5;
				
		this.cellsBoard = [];
		this.bagTxt = [];

		this.mousePointer = null;
		this.oldPosX = null;
		this.oldPosY = null;

		this.mustReDraw = false;

		this.optionTxt = null;
		this.optionTxt1 = null;
		this.optionTxt2 = null;

	}

	preload(){
	
		//console.log("ProfileScene preload");
	
	}

	searchRectRowCol(rect){

		var pos = [];

		for(var r = 0; r < this.rows; r++){					
			for(var c = 0; c < this.cols; c++){
							
				if(this.cellsBoard[r][c].x === rect.x && this.cellsBoard[r][c].y === rect.y){

					pos = [r, c];

				}

			}

		}

		return pos;

	}

	drawUseOption(parent, object){

		this.optionTxt = this.add.text(700, 70, "use", { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});
		this.optionTxt.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.optionTxt.width, this.optionTxt.height), Phaser.Geom.Rectangle.Contains);
					
		this.optionTxt.on('pointerover', function(pointer){
			if(this.optionTxt.alpha !== 0.5){
				this.optionTxt.setAlpha(0.5);
			}
		}, this);

		this.optionTxt.on('pointerout', function(pointer){
			if(this.optionTxt.alpha !== 1.0){
				this.optionTxt.setAlpha(1.0);
			}
		}, this);

		this.optionTxt.on('pointerdown', function(pointer){
			this.player.useItem(object);
			this.bag.removeObject(object);	
			this.destroyOption();
			this.mustReDraw = true;
		}, this);

	}

	drawEquipOption(parent, object, bagPos){

		this.optionTxt = this.add.text(700, 70, "equip", { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});
		this.optionTxt.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.optionTxt.width, this.optionTxt.height), Phaser.Geom.Rectangle.Contains);
					
		this.optionTxt.on('pointerover', function(pointer){
			if(this.optionTxt.alpha !== 0.5){
				this.optionTxt.setAlpha(0.5);
			}
		}, this);

		this.optionTxt.on('pointerout', function(pointer){
			if(this.optionTxt.alpha !== 1.0){
				this.optionTxt.setAlpha(1.0);
			}
		}, this);

		this.optionTxt.on('pointerdown', function(pointer){
			this.player.equip(object, bagPos);	
			this.destroyOption();
			this.mustReDraw = true;
		}, this);

	}

	drawArmOption(parent, object, bagPos){

		this.optionTxt1 = this.add.text(700, 70, "arm Right", { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});
		this.optionTxt1.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.optionTxt1.width, this.optionTxt1.height), Phaser.Geom.Rectangle.Contains);
					
		this.optionTxt1.on('pointerover', function(pointer){
			if(this.optionTxt1.alpha !== 0.5){
				this.optionTxt1.setAlpha(0.5);
			}
		}, this);

		this.optionTxt1.on('pointerout', function(pointer){
			if(this.optionTxt1.alpha !== 1.0){
				this.optionTxt1.setAlpha(1.0);
			}
		}, this);

		this.optionTxt1.on('pointerdown', function(pointer){
			this.player.arm(object, bagPos, "handR");	
			this.destroyOption();			
			this.mustReDraw = true;
		}, this);

		this.optionTxt2 = this.add.text(700, 100, "arm Left", { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});
		this.optionTxt2.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.optionTxt2.width, this.optionTxt2.height), Phaser.Geom.Rectangle.Contains);
					
		this.optionTxt2.on('pointerover', function(pointer){
			if(this.optionTxt2.alpha !== 0.5){
				this.optionTxt2.setAlpha(0.5);
			}
		}, this);

		this.optionTxt2.on('pointerout', function(pointer){
			if(this.optionTxt2.alpha !== 1.0){
				this.optionTxt2.setAlpha(1.0);
			}
		}, this);

		this.optionTxt2.on('pointerdown', function(pointer){
			this.player.arm(object, bagPos, "handL");	
			this.destroyOption();			
			this.mustReDraw = true;
		}, this);

	}

	drawOption(parent, rect){

		this.destroyOption();

		var rectPos = this.searchRectRowCol(rect);	
		var bagPos = rectPos[1] + (rectPos[0] * (this.cols + 1));
		
		if(this.bagTxt[rectPos[0]][rectPos[1]] !== null){

			var object = this.bag.getObjectList()[bagPos];
		
			if(object.getCanUseIt() === true){
				this.drawUseOption(parent, object);
			}
			else if(object.getCanEquipIt() === true){
				this.drawEquipOption(parent, object, bagPos);
			}
			else if(object.getCanArmIt() === true){
				this.drawArmOption(parent, object, bagPos);
			}

		}
				
	}

	destroyOption(){

		if(this.optionTxt !== null){

			this.optionTxt.destroy();

		}

		if(this.optionTxt1 !== null){

			this.optionTxt1.destroy();

		}

		if(this.optionTxt2 !== null){

			this.optionTxt2.destroy();

		}
		
	}

	resetCellsColor(){

		for(var r = 0; r < this.rows; r++){					
			for(var c = 0; c < this.cols; c++){
							
				this.cellsBoard[r][c].setFillStyle(0xffffff, 0.5);

			}

		}

	}

	drawRectangle(parent, posX, posY){

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
			this.drawOption(parent, rect);
		}, this);

		return rect;

	}

	drawBoard(parent){

		for(var r = 0; r < this.rows; r++){		
			this.cellsBoard[r] = [];
			for(var c = 0; c < this.cols; c++){

				var posX = 4 + (64 * 5) + c * 64;
				var posY = 300 - (64 * 3) + 2 + r * 64;

				this.cellsBoard[r][c] = this.drawRectangle(parent, posX, posY);

			}

		}

	}

	destroyBoard(){

		for(var r = 0; r < this.rows; r++){				
			for(var c = 0; c < this.cols; c++){

				this.cellsBoard[r][c].destroy();

			}

		}

		this.cellsBoard = [];

	}

	drawObjectText(parent, posX, posY, objectPos){

		var text = this.add.text(posX, posY + 30 - 6, this.bag.getObjectList()[objectPos].getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00', align: 'center'});		
		text.setInteractive(new Phaser.Geom.Rectangle(0, 0, text.width, text.height), Phaser.Geom.Rectangle.Contains);
					
		text.on('pointerdown', function(pointer){
			this.oldPosX = text.x;
			this.oldPosY = text.y;
			this.oldObjectPos = objectPos;
			this.mousePointer = text;
		}, this);

		text.on('pointerup', function(pointer){							
			this.mousePointer = null;

			var oneCellFound = false;
			var indices = [];
			for(var r = 0; r < this.rows; r++){				
				for(var c = 0; c < this.cols; c++){
					if(this.cellsBoard[r][c].fillAlpha === 0.25){
						oneCellFound = true;
						indices.push([r, c]); 
					}
				}
			}
						
			if(oneCellFound === true){

				var objPos = indices[0][1] + (indices[0][0] * (this.cols + 1));
				this.bag.moveObject(this.bag.getObjectList()[objectPos], objPos);
				this.mustReDraw = true;

			}
			else{
				text.setPosition(this.oldPosX, this.oldPosY);
			}

		}, this);

		return text;

	}

	drawItemsBoard(parent){
		
		for(var r = 0; r < this.rows; r++){			
			this.bagTxt[r] = [];
			for(var c = 0; c < this.cols; c++){

				var posX = 4 + (64 * 5) + c * 64 - 30;
				var posY = 300 - (64 * 3) + 2 + r * 64 - 30;
				
				if(this.bag.getObjectList()[c + (r * (this.cols + 1))] !== undefined && this.bag.getObjectList()[c + (r * (this.cols + 1))] !== null){
				
					this.bagTxt[r][c] = this.drawObjectText(parent, posX, posY, c + (r * (this.cols + 1)));

				}
				else{

					this.bagTxt[r][c] = undefined;

				}
				
			}

		}

	}

	destroyItemsBoard(){

		for(var r = 0; r < this.rows; r++){					
			for(var c = 0; c < this.cols; c++){

				if(this.bagTxt[r][c] !== undefined){

					this.bagTxt[r][c].destroy();

				}

			}
		}

		this.bagTxt = [];

	}

	drawBodyBoard(){

		//	LEFT HAND
		if(this.player.getHandL() !== null){
			this.handLTxt = this.add.text(4 + (64 * 1), 236 + 30 - 6, this.player.getHandL().getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00'});
		}

		//	HEAD
		if(this.player.getHead() !== null){
			this.headTxt = this.add.text(4 + (64 * 2), 108 + 30 - 6, this.player.getHead().getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00'});
		}

		//	NECK
		if(this.player.getNeck() !== null){
			this.neckTxt = this.add.text(4 + (64 * 2), 172 + 30 - 6, this.player.getNeck().getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00'});
		}

		//	UPPER
		if(this.player.getUpper() !== null){
			this.upperTxt = this.add.text(4 + (64 * 2), 236 + 30 - 6, this.player.getUpper().getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00'});
		}

		//	BELT
		if(this.player.getBelt() !== null){
			this.beltTxt = this.add.text(4 + (64 * 2), 300 + 30 - 6, this.player.getBelt().getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00'});
		}

		//	LOWER
		if(this.player.getLower() !== null){
			this.lowerTxt = this.add.text(4 + (64 * 2), 364 + 30 - 6, this.player.getLower().getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00'});
		}

		//	FOOT
		if(this.player.getFoot() !== null){
			this.footTxt = this.add.text(4 + (64 * 2), 428 + 30 - 6, this.player.getFoot().getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00'});
		}


		//	RIGHT HAND
		if(this.player.getHandR() !== null){
			this.handRTxt = this.add.text(4 + (64 * 3), 236 + 30 - 6, this.player.getHandR().getName(), { fontFamily: 'Arial', fontSize: 12, color: '#00ff00'});
		}

	}

	destroyBodyBoard(){

		//	LEFT HAND
		if(this.handLTxt !== null){
			this.handLTxt = null;
		}

		//	HEAD
		if(this.headTxt !== null){
			this.headTxt = null;
		}

		//	NECK
		if(this.neckTxt !== null){
			this.neckTxt = null;
		}

		//	UPPER
		if(this.upperTxt !== null){
			this.upperTxt = null;
		}

		//	BELT
		if(this.beltTxt !== null){
			this.beltTxt = null;
		}

		//	LOWER
		if(this.lowerTxt !== null){
			this.lowerTxt = null;
		}

		//	FOOT
		if(this.footTxt !== null){
			this.footTxt = null;
		}


		//	RIGHT HAND
		if(this.handRTxt !== null){
			this.handRTxt = null;
		}

	}

	create(){
	
		//console.log("ProfileScene create");
			
		var graphics = this.add.graphics();

		this.input.topOnly = false;

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
		this.playerHealthTxt = this.add.text(4 + 64 + 42, 4 + 36, 'Health: ' + this.player.getHealth(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});

		this.drawBoard(this);
		this.drawItemsBoard(this);	
		
		graphics.fillStyle(0xffffff, 0.5);	
		var handL = new Phaser.Geom.Rectangle(4 + (64 * 1), 236, 60, 60);
		graphics.fillRectShape(handL);


		var head = new Phaser.Geom.Rectangle(4 + (64 * 2), 108, 60, 60);
		graphics.fillRectShape(head);

		var neck = new Phaser.Geom.Rectangle(4 + (64 * 2), 172, 60, 60);
		graphics.fillRectShape(neck);

		var upper = new Phaser.Geom.Rectangle(4 + (64 * 2), 236, 60, 60);
		graphics.fillRectShape(upper);

		var belt = new Phaser.Geom.Rectangle(4 + (64 * 2), 300, 60, 60);
		graphics.fillRectShape(belt);

		var lower = new Phaser.Geom.Rectangle(4 + (64 * 2), 364, 60, 60);
		graphics.fillRectShape(lower);

		var foot = new Phaser.Geom.Rectangle(4 + (64 * 2), 428, 60, 60);
		graphics.fillRectShape(foot);


		var handR = new Phaser.Geom.Rectangle(4 + (64 * 3), 236, 60, 60);
		graphics.fillRectShape(handR);

		this.drawBodyBoard();

		//	PLAYER ATTACK
		this.playerAttackTxt = this.add.text(4 + 64 + 42, 580 - (4 + 36) - 20 - 10, 'Attack: ' + this.player.getAttack(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});

		//	PLAYER DEFENSE
		this.playerDefenseTxt = this.add.text(4 + 64 + 42, 580 - (4 + 36), 'Defense: ' + this.player.getDefense(), { fontFamily: 'Arial', fontSize: 20, color: '#00ff00'});

		this.input.on('pointermove', function(pointer){

			if(this.mousePointer !== null){

				this.mousePointer.setPosition(pointer.positionToCamera(this.cameras.main).x - (this.mousePointer.width/2), pointer.positionToCamera(this.cameras.main).y - (this.mousePointer.height/2));

			}

		}, this);

	}

	update(time, delta){
	
		//console.log("ProfileScene update");
			
		if(this.mustReDraw === true){

			this.destroyItemsBoard();
			this.destroyBoard();

			this.destroyBodyBoard();

			this.drawBoard(this);
			this.drawItemsBoard(this);	

			this.drawBodyBoard();

			this.playerHealthTxt.text = 'Health: ' + this.player.getHealth();
			this.playerAttackTxt.text = 'Attack: ' + this.player.getAttack();
			this.playerDefenseTxt.text = 'Defense: ' + this.player.getDefense();

			this.mustReDraw = false;

		}

	}

}