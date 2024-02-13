
//Tenemos un objeto y queremos eliminar ela propiedad age,
// creamos dos constantes, age que es lo que queremos eliminar
// y noAge que es el objeto que se devuelve

const obj = {
  name: 'John',
  lastname: 'Doe',
  age: 45,
  id: 'U-9472000013',
  location: 'Norway',
};

const { age, ...noAge } = obj;


//Tambien podemos usar Delete

const obj = {
  name: 'John',
  lastname: 'Doe',
  age: 45,
  id: 'U-9472000013',
  location: 'Norway',
};
const newObj = { ...obj };
delete newObj.age;
