window.addEventListener('load', function() {
    // password
    let password = document.getElementById('password');
    // conferma-password
    let confirm_password = document.getElementById('password-confirm');
    // checkbox
    let markedCheckbox = document.querySelectorAll('input[type="checkbox"]');

    // VALIDAZIONE PASSWORD
    function validatePassword(){
        if(password.value.length < 8) {
            password.setCustomValidity("La password deve essere lunga almeno 8 caratteri");
        } else {
            password.setCustomValidity('');
        }
        if(password && confirm_password) {
            if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("La password di conferma non corrisponde");
            } else {
            confirm_password.setCustomValidity('');
            }
        }

    };

    password.onkeyup = validatePassword;
    if(confirm_password) confirm_password.onkeyup = validatePassword;

    // validazione checkbox
    let markedCheckbox_value = document.querySelectorAll('input[type="checkbox"]:checked');
    if(markedCheckbox_value.length == 0 && markedCheckbox.length > 1) {
        markedCheckbox[0].setCustomValidity('Seleziona almeno una specializzazione');
    }
    else{
        markedCheckbox[0].setCustomValidity('');
    }

    markedCheckbox.forEach(item => {
        item.addEventListener('change', function(event) {
            // valore checked checkbox 
            markedCheckbox_value = document.querySelectorAll('input[type="checkbox"]:checked');
            if(markedCheckbox_value.length == 0 && markedCheckbox.length > 1) {
                markedCheckbox[0].setCustomValidity('Seleziona almeno una specializzazione');
            }
            else{
                markedCheckbox[0].setCustomValidity('');
            }
        });
    });
});
