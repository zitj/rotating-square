const watermelon = document.getElementById('watermelon');
const x = document.getElementById('x');
const y = document.getElementById('y');

let mouseDown = false;

for (let i = 0; i <= 7; i++) {
	let addSeeds = '';
	addSeeds = `
    <div class="containerOfSeeds">
        <div class="seed"></div>
        <div class="seed"></div>
        <div class="seed"></div>
        <div class="seed"></div>
        <div class="seed"></div>
        <div class="seed"></div>
    </div>
    `;

	watermelon.innerHTML += addSeeds;
}

watermelon.addEventListener('mousedown', (e) => {
	console.log(e);
	mouseDown = true;
	console.log(mouseDown);
	if (mouseDown) {
	}
});

watermelon.addEventListener('mousemove', (e) => {
	x.innerText = `x = ${e.x}`;
	y.innerText = `y = ${e.y}`;
	if (e.y > 350 && e.x < 870) {
		console.log(e.y - 350);
		watermelon.style.transform = `rotate(-${e.y - 350}deg)`;
	}
	if (e.y > 350 && e.x > 870) {
		console.log(e.y - 350);
		watermelon.style.transform = `rotate(${e.y - 350}deg)`;
	}
});

watermelon.addEventListener('mouseup', (e) => {
	console.log(e);
	mouseDown = false;
	console.log(mouseDown);
	watermelon.style.backgroundColor = '#ff4757';
});
