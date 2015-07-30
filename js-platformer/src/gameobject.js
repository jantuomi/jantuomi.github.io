var GameObjectPrototype = function() {
	this.texture = PIXI.Texture.fromImage("res/red.png");
	this.sprite = new PIXI.Sprite(this.texture);

	this.initPosition = function() {
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;

		this.sprite.position.x = settings.STAGE_WIDTH * 0.5;
		this.sprite.position.y = settings.STAGE_HEIGHT * 0.5;
	}

	return this;
}

var GameObject = function() {

	this.initPosition();
	Engine.instance.addGameObject(this);

	this.update = function() {

	}

	return this;
}

GameObject.prototype = new GameObjectPrototype();