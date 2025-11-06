const scoreSpan = document.getElementById("score");
const upgrade67Btn = document.getElementById("upgrade67");
const autoclickerBtn = document.getElementById("autoclicker");
const pointerAutoclicker = document.getElementById("pointer");

let score = 0;

let upgrades = {
	"67": { cost: 67, active: false },
	"autoclicker": { cost: 100, active: false, interval : null }
};

function updateUpgradeStates() {
	upgrade67Btn.disabled = !(score >= upgrades["67"].cost && !upgrades["67"].active)
	autoclickerBtn.disabled = !(score >= upgrades["autoclicker"].cost && !upgrades["autoclicker"].active)
}

updateUpgradeStates()

function clickerclick() {	
	let clickValue = 1;
	if (upgrades["67"].active) {
		clickValue = Math.random() < 0.5 ? 6 : 7;
	}

	score += clickValue;
	scoreSpan.innerHTML = "Score: " + score;

	showDelta(clickValue);
	updateUpgradeStates();
}

function showDelta(value) {
	const pop = document.createElement("span");
	pop.className = "delta-pop";
	pop.innerText = "+" + value;
	document.body.appendChild(pop);

	pop.style.left = "50%";
	pop.style.top = "calc(50% - 78px)";
	pop.style.transform = "translateX(-50%)";

	setTimeout(() => pop.remove(), 800);
}

upgrade67Btn.addEventListener("click", () => {
	if (score >= upgrades["67"].cost) {
		score -= upgrades["67"].cost;
		upgrades["67"].active = true;
		scoreSpan.innerHTML = "Score: " + score;
	}
	updateUpgradeStates();
});

autoclickerBtn.addEventListener("click", () => {
	if (score >= upgrades["autoclicker"].cost && !upgrades["autoclicker"].interval) {
		score -= upgrades["autoclicker"].cost;
		upgrades["autoclicker"].active = true;
		upgrades["autoclicker"].interval = setInterval(clickerclick, 1000);
		scoreSpan.innerHTML = "Score: " + score;
		pointerAutoclicker.style.display = "inherit";
	}
	updateUpgradeStates();
});
