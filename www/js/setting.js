/**
 * Created by CTINFO on 1/30/2016.
 */
var cangelang = "";
var resetpassword = "";
var enlang = "";
var eslang = "";
var ok = "";
var close = "";
gdc_lang = window.localStorage.getItem("gdc_lang");
if (gdc_lang == null) {
    gdc_lang = "es";
}

if (gdc_lang == "en")
    ready_eng();
if (gdc_lang == "es")
    ready_spa();

function ready_eng() {
    cangelang = "Change Your Language";
    resetpassword = "Reset Password";
    enlang = "English";
    eslang = "Spanish";
    ok = "Ok";
    close = "Cancel";

}

function ready_spa() {
    cangelang = "Cambie su idioma";
    resetpassword = "Restablecer la contraseña";
    enlang = "English";
    eslang = "Español";
    ok = "De acuerdo";
    close = "Cancelar";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('cangelang').innerHTML = cangelang;
        document.getElementById('resetpassword').innerHTML = resetpassword;
        document.getElementById('cangelang1').innerHTML = cangelang;
        document.getElementById('enlang').innerHTML = enlang;
        document.getElementById('eslang').innerHTML = eslang;
        document.getElementById('ok').innerHTML = ok;
        document.getElementById('close').innerHTML = close;

    })
}
//gdc_lang = window.localStorage.getItem("gdc_lang");
if (gdc_lang == null) {
    gdc_lang = "es";
}
if (gdc_lang == "en") {
    document.getElementById("en_radio").checked = true;
    document.getElementById("es_radio").checked = false;
} else {
    document.getElementById("en_radio").checked = false;
    document.getElementById("es_radio").checked = true;
}
function goToLangChange() {
    if (document.getElementById('en_radio').checked) {
        window.localStorage.setItem("gdc_lang", "en");
    }
    if (document.getElementById('es_radio').checked) {
        window.localStorage.setItem("gdc_lang", "es");
    }
    window.location.href = "index.html";
}

function goToResetPassword() {
    window.location.href = "resetpassword.html";
}