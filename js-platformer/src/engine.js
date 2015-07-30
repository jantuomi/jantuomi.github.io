var Engine = function() {

	this.stage = new PIXI.Stage(settings.STAGE_BGCOLOR);
	this.renderer = PIXI.autoDetectRenderer(settings.STAGE_WIDTH, settings.STAGE_HEIGHT);

	this.gameObjectList = [];

	this.update = function() {
		for (var i = 0; i < this.gameObjectList.length; i++) {
			this.gameObjectList[i].update();
		}


		this.renderer.render(this.stage);
	}

	this.addGameObject = function(gameObject) {
		this.gameObjectList.push(gameObject);
		this.stage.addChild(gameObject.sprite);
	}

	return this;
}

var engine = new Engine();
Engine.instance = engine;