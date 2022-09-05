document.getElementById('ex1').addEventListener("click", function () {
	document.getElementsByTagName('h1')[0].innerHTML = "Hello World"
});
document.getElementById("ex2").addEventListener("click", function () {
	let paragraphs = document.querySelectorAll("p").forEach(function (element) {
		element.classList.toggle("red");
	})
})
document.getElementById('ex3').addEventListener('click', function () {
	document.querySelectorAll("li").forEach(function (element) {
		element.classList.toggle("rotate");
	});
})

document.getElementById('ex4').addEventListener('click', function () {
	document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(function (element) {
		element.classList.toggle("hide");
	});
})
document.getElementById('ex5').addEventListener('click', function () {
	document.querySelectorAll("a").forEach(function (element) {
		element.classList.toggle("font");
	});
})
