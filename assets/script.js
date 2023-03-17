/**
 * Al click sul pulsante start game generare una griglia di gioco
 */
const mainCont = document.querySelector('.main_container')
const startGame = document.querySelector('.start_game');
const resetGame = document.querySelector('.reset')

startGame.addEventListener('click', function(){
    mainCont.classList.remove('d-none')
})

resetGame.addEventListener('click', function(){
    mainCont.classList.add('d-none')
})

/**generare una griglia di 100 celle
 * selezioniamo il nodo della dom in cui inserire le 64 celle
 * ciclo n volte per generare le celle
 * rigenerare il markup
 */

const containerElm = document.querySelector('.container');
const maxCellNumber = 100;

for (let i = 0; i < maxCellNumber; i++) {
    const cellMarkup = `<div class="cell">${i + 1}</div>`;
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
        this.classList.toggle('bg-red')
    })
}