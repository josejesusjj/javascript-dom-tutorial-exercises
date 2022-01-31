// Your code here
let element = document.querySelector("");
element.parentNode.removeChild(element);
//para borrar la class es .fa-trash

//aqui abajo es para agregar un elemento

let beginning = "<ul>";
let liststring = "<li>"+"<span>"+"<i class='fa fa-trash'>"+"</i>"+"</span>"+"</li";
let ending = "</ul>";

// do not modify after this line
document.body.innerHTML = liststring;