function computeNthTerm () {
	let values = document.querySelectorAll(".geometric-nth-term");
	let commonRatio = values[0].value;
	let firstTerm = values[1].value;
	let numberOfTerms = values[2].value;
	if ((commonRatio != null && commonRatio != 0) && (firstTerm != null) && (numberOfTerms != null && numberOfTerms >= 1)) {
		let ans = (firstTerm) * (Math.pow(commonRatio, numberOfTerms - 1));
		document.getElementById("result-geometric-nth-term").textContent = String(ans);
	} else {
		document.getElementById("result-geometric-nth-term").textContent = "Error!";
	}
}

function computeGeometricMean () {
	let values = document.querySelectorAll(".geometric-mean");
	if ((values[0] != null && values[0] != "") && (values[1] != null && values[0] != "")) {
		let product = values[0].value * values[1].value;
		if (product > 0) {
			document.getElementById("result-geometric-mean").textContent = String(Math.sqrt(product).toFixed(2));
		} else {
			document.getElementById("result-geometric-mean").textContent = "Error!";
		}
	} else {
		document.getElementById("result-geometric-mean").textContent = "Error!";
	}
}

function computeGeometricSeries () {
	let values = document.querySelectorAll(".geometric-series");
	let numberOfTerms = values[0].value;
	let firstTerm = values[1].value;
	let commonRatio = values[2].value;
	console.log(numberOfTerms + " " + firstTerm + " " + commonRatio);
	if (firstTerm != "" && commonRatio != "")  {
		if (numberOfTerms != "") {
			let ans = ((firstTerm * (Math.pow(commonRatio, numberOfTerms) - 1)) / (commonRatio - 1));
			document.getElementById("result-geometric-series").textContent = String(ans.toFixed(2));
		} else {
			if (Math.abs(commonRatio) <= 1) {
				let ans = (firstTerm) / (1 - commonRatio);
				document.getElementById("result-geometric-series").textContent = String(ans.toFixed(2));
			} else {
				document.getElementById("result-geometric-series").textContent = "Error!";
			}
		}
	} else {
		document.getElementById("result-geometric-series").textContent = "Error!";
	}
}

document.getElementById("submit-geometric-nth-term").addEventListener("click", computeNthTerm);
document.getElementById("submit-geometric-mean").addEventListener("click", computeGeometricMean);
document.getElementById("submit-geometric-series").addEventListener("click", computeGeometricSeries);