let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let mySelect = document.querySelector("#mySelect")
for (let country of countries){
    let option = document.createElement("option");
    option.innerHTML = country;
    mySelect.appendChild(option);

}
mySelect.addEventListener('change',(e => {
    alert(e.target.value);
}))