/***********************************/
/*   JavaScript para Halloween     */
/*  Hecha por David Solera Romero  */
/*                                 */
/*     Estudiante de 1º de DAM     */
/*                                 */
/*      Fecha: 07 - 11 - 2023      */
/*                                 */
/**********************************/

function show(element) {
    document.getElementById(element).style.visibility="visible";
    /* extrae (get) el elemento bats y cambia en su estilo la visibilidad */
}   

function hide(element) {
    document.getElementById(element).style.visibility="hidden";
    /* extrae (get) el elemento bats y cambia en su estilo la visibilidad */
}

function sound(element) {
    document.getElementById('batsound').play();
    /* reproduce el sonido 'batsound' al hacer click */
}

function silence(element) {
    document.getElementById('batsound').pause();
    /* pausa el sonido 'batsound' al hacer click */
}