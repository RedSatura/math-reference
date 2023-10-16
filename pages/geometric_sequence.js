function computeNthTerm () {
	var values = document.querySelectorAll("form > input[type=number]");
	var commonRatio = values[0].value;
	var firstTerm = values[1].value;
	var numberOfTerms = values[2].value;
	if (commonRatio != null && firstTerm != null && numberOfTerms != null) {
		let ans = (firstTerm) * (Math.pow(commonRatio, numberOfTerms - 1));
		document.getElementById("result").textContent = String(ans);
	}
}

document.getElementById("submit").addEventListener("click", computeNthTerm);