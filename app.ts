function calcularEdad(fechaNacimiento: string): number {
    const hoy: Date = new Date();
    const nacimiento: Date = new Date(fechaNacimiento);
    
    let edad: number = hoy.getFullYear() - nacimiento.getFullYear();
    const mes: number = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 ) {
        edad--;
    }

    return edad;
}

const fechaNacimiento: string = "1996-07-30";
const edad: number = calcularEdad(fechaNacimiento);
console.log(`La edad es: ${edad}`);
