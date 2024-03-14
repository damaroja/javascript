


//Create a fucntion thar show the date in fortmat 20 de julio de 2021. Input is new Date()
const formatearFecha = (fecha) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Intl.DateTimeFormat('es-ES', options).format(fecha);
}
