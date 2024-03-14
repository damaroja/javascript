


const formatearFecha = (fecha) => {
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1;
    const anio = fechaObj.getFullYear();
    return `${dia}/${mes}/${anio}`;
}
