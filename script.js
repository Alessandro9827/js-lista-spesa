//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
//gli elementi della lista individualmente con un ciclo while.

const listaSpesa = ["Pasta", "Sugo", "Latte", "Caffè", "Fazzoletti", "Detersivo"];

const inputListaSpesa = document.querySelector("input#listaSpesa");
const addButoon = document.querySelector("button");

addButoon.addEventListener("click", function() {
    listaSpesa.push(inputListaSpesa);
})

const output = document.getElementById("output");

let i = 0;
while (i < listaSpesa.length) {
    const li = document.createElement("li");
    li.textContent = listaSpesa[i];
    output.appendChild(li);
    i++;
}


 console.log(listaSpesa);