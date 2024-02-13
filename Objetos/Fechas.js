

//Fecha de entrada: "2024-02-13T12:05:27.301Z"
//Fecha de salida: "2024-02-13"
const formatearFecha = (fecha) => {
      const fechaArray = fecha.split('T');
      return fechaArray[0];
    }


//Fecha de entrada: "2024-02-13T12:05:27.301Z"
//Fecha de salida: "13 de febrero de 2024"
const formatDate = (date) => {
      const newDate = new Date(date);
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      return newDate.toLocaleDateString('es-ES', options);
    }
