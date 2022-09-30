const checkbox = document.querySelectorAll(".my-check-input");

let my_edit_button = document.getElementById("btn-debug");

// my_button.addEventListener("click", myFunction);

let checked_cbx = false;


for (let i = 0; i < checkbox.length; i++) {

    if(checkbox[i].checked === true) {
        checked_cbx = true;
        break;
    } else {
        checked_cbx = false;
    }
}    

// se la variabile checked_cbx è false allora mostra l'elemento messaggio e disabilita il tasto modifica
// altrimenti se la variabile è true , riabilita il tasto modifica e nascondi l'elemento messaggio 
let msg_error_cbx = document.getElementById("my-checkbox-error");

let my_form_edit = document.getElementById("my-form-edit");

// se nessuna checkbox è spuntata mostra il messaggio di errore
if(checked_cbx === false) {
    msg_error_cbx.classList.replace('d-none', 'd-block');
}

// console.log(checkbox);

console.log('checked_cbx', checked_cbx);

// my_button.addEventListener("click", myFunction);

// function myFunction() {
//     // checked_cbx === true ? alert('checkbox spuntata') : alert('NO');
//     console.log('ciaone');
// }

// Modale conferma eliminazione profilo user
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('click', () => {
    myInput.classList.replace('d-none','d-block');
});