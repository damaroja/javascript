

function esObjetoVacio(objeto) {
  // Verificar si el objeto es null o undefined
  if (objeto === null || objeto === undefined) {
    return true;
  }

  // Verificar si el objeto no tiene propiedades propias
  for (var clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      return false;
    }
  }

  // Si no se encontraron propiedades propias, el objeto se considera vacío
  return true;
}

// Ejemplos de uso:
var objeto1 = {};  // Objeto vacío
var objeto2 = { clave: 'valor' };  // Objeto con una propiedad
var objeto3 = null;  // Objeto nulo
var objeto4;  // Objeto undefined

console.log(esObjetoVacio(objeto1));  // Devuelve true
console.log(esObjetoVacio(objeto2));  // Devuelve false
console.log(esObjetoVacio(objeto3));  // Devuelve true
console.log(esObjetoVacio(objeto4));  // Devuelve true







//Otra funcion para verificar si tenemos campos vacios 

function validarCamposNoVacios(objeto) {
  for (var propiedad in objeto) {
    if (!objeto.hasOwnProperty(propiedad)) continue; // Saltar las propiedades heredadas

    if (objeto[propiedad] === null || objeto[propiedad] === undefined || objeto[propiedad] === '') {
      return false; // Si al menos un campo está vacío, la validación falla
    }
  }
  return true; // Si todos los campos tienen valores, la validación es exitosa
}
