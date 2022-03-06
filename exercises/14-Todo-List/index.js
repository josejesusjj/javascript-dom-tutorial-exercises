// Your code here
//añadiendo elementos

let elem =document.createElement(h1)
elem.innerHTML = "Hello World";
document.body.appendChild(elem)

//prueba con boton
let button = document.querySelector("#addToDo");
button.addEventListener("click", function() {
	let elem = document.createElement("div");
	elem.innerHTML = "<li>"+"hola"+"</li>";
	document.body.appendChild(elem)
})
//removiendo elementos

let element = document.querySelector("");
element.parentNode.removeChild(element);
//para borrar la class es .fa-trash

//let beginning = "<ul>";
//let liststring = "<li>"+"<span>"+"<i class='fa fa-trash'>"+"</i>"+"</span>"+"</li";
//let ending = "</ul>";

// do not modify after this line
document.body.innerHTML = liststring;