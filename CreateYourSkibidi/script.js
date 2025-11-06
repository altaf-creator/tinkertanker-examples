const toiletTint = document.querySelector("#toilettint")
const toiletTintElement = document.getElementById("toilettint")
const hat0 = document.getElementById("hatnone")
const hat1 = document.getElementById("hat1")
const hat2 = document.getElementById("hat2")
const hat3 = document.getElementById("hat3")
const colInput = document.getElementById("toilet-col")
const hatLabel = document.getElementById("hat-label")

var hats = [
	["No Hat", hatnone],
	["Baseball Cap", hat1],
	["Witch Hat", hat2],
	["Beanie", hat3]
];

var curr = 0;

function changeHat(n) {
	for (var i = 0; i < hats.length; i++) {
		hats[i][1].style.display = "none";
	}

	if (curr + n >= hats.length) {
		curr = 0;
	} else if (curr + n <= 0) {
		curr = hats.length - 1;
	} else {
		curr = curr + n;
	}
	hats[curr][1].style.display = "inherit";
	hatLabel.innerHTML = hats[curr][0]
}

function prevHat() {
	changeHat(-1)
}

function nextHat() {
	changeHat(1)
}

window.onload = function() {
	console.log(toiletTintElement.clientWidth.toString() + "px");
	toiletTintElement.style.height = toiletTintElement.clientWidth.toString() + "px";
}

colInput.addEventListener("input", (event) => {
	const color = event.target.value;
	toiletTint.style.setProperty("--tint-color", color);
});
