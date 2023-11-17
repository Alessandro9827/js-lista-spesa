//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
//gli elementi della lista individualmente con un ciclo while.

const listaSpesa = ["Pasta", "Sugo", "Latte", "Caffè", "Fazzoletti", "Detersivo"];

const output = document.getElementById("output");

for (let i=0; i < listaSpesa.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaSpesa[i];
    output.appendChild(li);
}
