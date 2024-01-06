"use strict";
let extincionDinosaurios = 65000000;
let dinosaurioFavorito = "Velociraptor";
let extintos = true;
let miVariable;
function saludar(config) {
    return config;
}
let animales = ["Leon", "Tigre", "Elefante"];
let numbers = [1, 2, 3, 4, 5];
let numbersTwo = [];
let numbersThree = [];
let tupla = [1, "hola", true];
const chica = "s";
const mediana = "m";
const grande = "l";
const extraGrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "n";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Chica;
console.log(variable1);
var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["Idle"] = 0] = "Idle";
    LoadingState[LoadingState["Loading"] = 1] = "Loading";
    LoadingState[LoadingState["Success"] = 2] = "Success";
    LoadingState[LoadingState["Failed"] = 3] = "Failed";
})(LoadingState || (LoadingState = {}));
const estado = LoadingState.Idle;
const objeto = {
    id: 1,
    nombre: "Hola mundo",
    talla: Talla.Chica,
    direccion: {
        numero: 123,
        calle: "Calle falsa",
        pais: "Mexico"
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return 'puedes ingresar';
    return 'no puedes ingresar';
};
function validadEdad(edad) {
    if (edad > 17)
        return 'puedes ingresar';
    return 'no puedes ingresar';
}
function ErrorUsuario(mensaje) {
    throw new Error(mensaje);
}
let puntaje = 98;
puntaje = "98";
let animal = {
    id: 1,
    estado: "",
    nombre: ""
};
function sumaDos(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos("10");
//# sourceMappingURL=index.js.map