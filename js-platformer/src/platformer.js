document.body.appendChild(Engine.instance.renderer.view);

requestAnimFrame(animate);

function animate() {
	requestAnimFrame(animate);

	Engine.instance.update();
}