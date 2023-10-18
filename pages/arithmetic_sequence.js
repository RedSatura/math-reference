function computeNthTerm () {
	let values = document.querySelectorAll(".arithmetic-nth-term");
	let firstTerm = values[0].value;
	let numberOfTerms = values[1].value;
	let commonDifference = values[2].value;
	if (firstTerm != "" && numberOfTerms != "" && commonDifference != "") {
		let ans = Number(firstTerm) + (numberOfTerms - 1) * (commonDifference);
		document.getElementById("result-arithmetic-nth-term").textContent = String(ans);
	} else {
		document.getElementById("result-arithmetic-nth-term").textContent = "Error!";
	}
}

function computeArithmeticMean () {
	let values = document.querySelectorAll(".arithmetic-mean")[0].value;
	let filteredValues = values.match(/[\d,]/gm);
	let numbers = filteredValues.join("").split(",");
	let sum = 0;
	numbers.forEach((item) => {
		sum += Number(item);
	});
	let ans = sum / numbers.length;
	document.getElementById("result-arithmetic-mean").textContent = String(ans);
}

function computeArithmeticSeries () {
	let values = document.querySelectorAll(".arithmetic-series");
	let lastTerm = values[0].value;
	let numberOfTerms = values[1].value;
	let firstTerm = values[2].value;
	let commonDifference = values[3].value;
	if (firstTerm != "" && commonDifference != "" && numberOfTerms != "") {
		if (lastTerm != "") {
			let ans = (numberOfTerms / 2) * (firstTerm + lastTerm);
			document.getElementById("result-arithmetic-series").textContent = String(ans);
		} else {
			let ans = (numberOfTerms / 2) * ((2 * firstTerm) + ((numberOfTerms - 1) * commonDifference));
			document.getElementById("result-arithmetic-series").textContent = String(ans);
		}
	} else {
		document.getElementById("result-arithmetic-series").textContent = "Error!";
	}
}

document.getElementById("submit-arithmetic-nth-term").addEventListener("click", computeNthTerm);
document.getElementById("submit-arithmetic-mean").addEventListener("click", computeArithmeticMean);
document.getElementById("submit-arithmetic-series").addEventListener("click", computeArithmeticSeries);