function testNum(a){
let result;
if (a > 0){
result = 'Positive';
}else{
result = ' Not Positive';
}
return result;
}
console.log(testNum(10));


function Persona (nombre){
this.nombre =nombre;
this.saludar= function(){
return `${this.nombre}  dice hola!`;

};

}

const PersonaUno = new Persona("Ignacio");
const PersonaDos = new Perona ("Nacho");

console.log(PersonaUno);
console.log(PersonaDos);

console.log(personaUno.nombre);
console.log(PersonaDos.saludar());