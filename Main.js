import {GameManagerScene} from './Scenes/GameManagerScene.js';

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	antialias: false,
	pixelArt: true,
	roundPixels: true,
	scene: [GameManagerScene]
};

var game = new Phaser.Game(config);