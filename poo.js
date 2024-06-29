const estudianteUno ={
nombre: 'Juan',
apellido:'Campos',
id:  " er2013",
intereses: ["Musica", "bachata"],

saludar(){

   return `${this.nombre} dice hola!`

}


}

function Persona (nombre){
this.nombre = nombre;
this.saludar = function(){

 return `{this.nombre} dice hola`;
    
};

}

const personaUno = new Persona ("Ignacio");
const PersonaDos = new Persona ("Luis");

console.log(personaUno);
console.log(PersonaDos);

