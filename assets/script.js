/**generare una griglia di 64 celle
 * selezioniamo il nodo della dom in cui inserire le 64 celle
 * ciclo n volte per generare le celle
 * rigenerare il markup
 */

const containerElm = document.querySelector('.container');
const maxCellNumber = 100;

for (let i = 0; i <= maxCellNumber; i++) {
    const cellMarkup = `<div class="cell"></div>`;
    containerElm.innerHTML += cellMarkup;
}

/**Ogni volta che cliccko su un quadrato la cella si colora di verde
 * seleziono la cella che ha la classe cell e active
 * sulla cella selezionata aggiungo un event listener
 * recupero l'elemento della dom che ho cliccato e associo il colore verde
 */

/*const cellElm = document.querySelector('.cell.active');
cellElm.addEventListener('click', function(){
    this.classList.toggle('bg-green')
})*/

const cells = document.querySelectorAll('.cell');
for (let i = 0; i < cells.length; i++) {
    const thisCell = cells[i];
    console.log(thisCell);

    thisCell.addEventListener('click', function(){
        this.classList.toggle('bg-green')
    })
}