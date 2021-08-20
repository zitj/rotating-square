const x = document.getElementById('x');
const y = document.getElementById('y');
const rotation = document.getElementById('rotation');

let watermelon = document.querySelector('#watermelon');
let watermelonBoundingRect = watermelon.getBoundingClientRect();

let watermelonCenter = {
	x: watermelonBoundingRect.left + watermelonBoundingRect.width / 2,
	y: watermelonBoundingRect.top + watermelonBoundingRect.height / 2,
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

document.addEventListener('mousemove', (e) => {
	x.innerText = `x = ${e.x}`;
	y.innerText = `y = ${e.y}`;
	let angle = Math.atan2(e.pageX - watermelonCenter.x, -(e.pageY - watermelonCenter.y)) * (180 / Math.PI);
	watermelon.style.transform = `rotate(${angle}deg)`;
	rotation.innerText = `rotation = ${angle.toFixed(0)} deg`;
});
