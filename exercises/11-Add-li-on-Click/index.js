let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector("#myList");
	let li = document.createElement("li");
	li.innerHTML = "Another element";
	list.appendChild(li);
	
});
