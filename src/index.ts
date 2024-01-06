/* Sección 2: Tipos básicos */

//? Boolean, Number, String, Array, Tuple, Enum, Any, Void, Null, Undefined, Never, Object

let extincionDinosaurios: number = 65_000_000;
let dinosaurioFavorito: string = "Velociraptor";
let extintos = true;

let miVariable;

function saludar(config: any): void {
  return config;
}

let animales: string[] = ["Leon", "Tigre", "Elefante"];
let numbers: number[] = [1, 2, 3, 4, 5];
let numbersTwo: boolean[] = [];
let numbersThree: Array<number> = [];

// numbers.map((x) =>x.) El autocomplete funciona con los tipos de datos

let tupla: [number, string, boolean] = [1, "hola", true];

const chica = "s"
const mediana = "m"
const grande = "l"
const extraGrande = "xl"

//Pascale Case
enum Talla {
  Chica = "s", Mediana = "n", Grande = "l", ExtraGrande = "xl"
}

const variable1 = Talla.Chica;
console.log(variable1);

enum LoadingState {
  Idle, Loading, Success, Failed
}


const estado = LoadingState.Idle;

type Direccion = {
  numero: number,
  calle: string
  pais: string
}

type Persona = {
  readonly id: number,
  nombre: string,
  talla: Talla,
  direccion: Direccion
}

const objeto: Persona = {
  id: 1,
  nombre: "Hola mundo",
  talla: Talla.Chica,
  direccion: {
    numero: 123,
    calle: "Calle falsa",
    pais: "Mexico"
  }
}

const arr:Persona[] = []

const fn: (a: number) => string = (edad:number) => {
  if (edad > 17)
    return 'puedes ingresar'  
  return 'no puedes ingresar'
}

function validadEdad (edad: number): string{
  if(edad > 17)
    return 'puedes ingresar'
  return 'no puedes ingresar'
}


function ErrorUsuario(mensaje: string): never {
  throw new Error(mensaje);
}

/* Sección 3: Tipos avanzados */

//? Union, Alias, Intersection, Literal, Guards, Type Inference, Type Assertion

/* Union type */
let puntaje: number | string = 98;

puntaje = "98";

type Animal={
  id: number,
  estado: string
}



type Usuario={
  id: number,
  nombre: string
}

let animal: Usuario | Animal = {
  id: 1,
  estado:"",
  nombre: ""
}

function sumaDos(n: number | string): number {
  if (typeof n === "number") {    
    return n + 2;
  }
  return parseInt(n) + 2;
}

sumaDos("10");