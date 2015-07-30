var Player = function() {
	this.texture = PIXI.Texture.fromImage("res/player.png");
	this.sprite = new PIXI.Sprite(this.texture);

	Engine.instance.addGameObject(this);
	this.initPosition();

	this.update = function() {
		//this.prototype.update.call(this);
	}

	return this;
}

Player.prototype = new GameObjectPrototype();

//create a player instance
Engine.player = new Player();