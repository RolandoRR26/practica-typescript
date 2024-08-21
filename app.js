function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var nacimiento = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0) {
        edad--;
    }
    return edad;
}
var fechaNacimiento = "1996-07-30";
var edad = calcularEdad(fechaNacimiento);
console.log("La edad es: ".concat(edad));
