const watermelon = document.getElementById('watermelon');
const watermelonContainer = document.querySelector('.watermelonContainer');
const x = document.getElementById('x');
const y = document.getElementById('y');
const rotation = document.getElementById('rotation');
let rotationCounter = 1;

let rotate;
let mouseDown = false;

const state = {
	mouse: {
		x: 0,
		y: 0,
	},
	watermelon: {
		x: 280,
		y: 300,
		rotation: 0,
	},
};

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

let watermelonCenter = {
	x: watermelon.clientLeft + watermelon.clientWidth / 2,
	y: watermelon.clientTop + watermelon.clientHeight / 2,
};

watermelonContainer.addEventListener('mousemove', (e) => {
	// let angle = Math.atan2(e.pageX - watermelonCenter.x, -(e.pageY - watermelonCenter.y)) * (180 / Math.PI);
	x.innerText = `x = ${e.x}`;
	y.innerText = `y = ${e.y}`;
	if (e.y > 330) {
		watermelon.style.transform = `rotate(-${e.y - 360}deg)`;
		rotation.innerText = `rotation = -${e.y - 360} deg`;
	}
});
