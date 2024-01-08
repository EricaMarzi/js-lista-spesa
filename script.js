/*
Consegna:
Data una lista della spesa (inventatela), stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
Se abbiamo difficoltà con lo stampare in pagina, proviamo prima a stampare col ciclo for e solo dopo convertiamo il for in while
*/

const list = document.getElementById("shopping-list")
const shoppingList = ["latte", "uova", "pesce", "biscotti", "pane", "tonno", "prosciutto", "pasta"]

let listItem = "<ul>"
for (let i = 0 ; i < shoppingList.length; i++) {
    console.log (shoppingList[i])
    listItem += `<li>${shoppingList[i]}</li>  `
}
listItem += "</ul>"
list.innerHTML = listItem

/*let i = 0
while (i < shoppingList.length) {
    console.log(shoppingList[i])
    i++
}
*/
