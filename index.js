
//Ejercicio 1
const Coche = {

marca: 'opel',
modelo: 'astra',
matricula: '1111AAA'

}

//Ejercicio 2

const Casa = {

    codPostal: 48014,
    calle: 'lehendakari',
    portal: 1,
    piso: '1A'
    
    }


//Ejercicio 3

const FullStackDeveloper  = {

    lenguajes: ['java', 'php', 'js'], 
    proyectos: ['clon', 'objetos', 'metodos']
        
        
        } 


//Ejercicio 4

const Perro = {

    nombre: 'Rex',
    raza: 'Pastor Alemán',
    color: 'marron',
    edad: 1,
    popo: 1,


    ladrar : function (){

        return console.log('guau,guau');

    },

    popo : function (){

        return Math.random() * 3;

    }

}



//Ejercicio 5

let Portatil = {"marca": "Asus", "modelo": "A33"};

let MarcaPortatil = Portatil.marca;

console.log(MarcaPortatil);


//Ejercicio 6

let MarcaPortatil2 = Portatil["marca"];

console.log(MarcaPortatil2);


//Ejercicio 7

let Concierto = {"grupos": ["Twenty One Pilots", "AC/DC", "Queen"], "cartelera": ["Queen"], "fecha": null};

let grupos = Concierto.grupos;
console.log(grupos);


//Ejercicio 8

let Led = {"rojo": "FF", "verde": "00", "azul": "00", "encendido": "powered"};

const RGB = [Led.rojo, Led.verde, Led.azul];

console.log(RGB)

//Ejercicio 9

let Portatil2 = {"marca": "Asus", "modelo": "A33"};

Portatil2.marca = "P345";

console.log(Portatil2.marca)

//Ejercicio 10

let Concierto2 = {"grupos": ["Twenty One Pilots", "AC/DC", "Queen"], "cartelera": ["Queen"], "fecha": null};

Concierto2.cartelera.push("Guns N' Roses");
console.log(Concierto2.cartelera)

//Ejercicio 11

Concierto2.fecha = new Date();
console.log(Concierto2.fecha);

//Ejercicio 12


let Impresora = {"tinta": {"rojo": 75, "verde": 33, "azul": 2}, imprimiendo: null};

Impresora.imprimiendo = [Impresora.nombreArchivo, Impresora.copias, Impresora.numPaginas];

console.log(Impresora.imprimiendo)


//Ejercicio 13

const Noticia = {
    titular: "",
    cuerpo: ""

}

//Ejercicio 14

const Persona = {
    nombre: "",
    apellidos: "",
    edad: ""

}


//Ejercicio 15


const Avion = {

    numPasajeros: 20,
    

    despegar : function (){

        return console.log('despegando');

    },

    volar : function (){

        return console.log("llegando al destino");

    },

    aterrizar : function (){

        return console.log("aterrizando");

    }

}

//Ejercicio 16

const Paquete = {

    contenido: ["bolsa","lapiz", "boligrafo" ]
}



//Ejercicio 17

const Pais = {

    numHabitantes: 10000000,
    continente: "Europa",
    gentilicio: "nose"
}

//Ejercicio 18

let O_Error = {"codigo": 404};

let codError = O_Error.codigo;

console.log(codError)

//Ejercicio 19

let Grupo = {"integrantes": ["Pedro", "Paula", "Soledad"], "numIntegrantes": 3};
const integrantes = [Grupo.integrantes[1],Grupo.integrantes[2],Grupo.integrantes[3]];
console.log(integrantes);

//Ejercicio 20

let Impresora2 = {"tinta": {"rojo": 75, "verde": 33, "azul": 2}, imprimiendo: null};

const nivelesTinta = [Impresora2.tinta["rojo"], Impresora2.tinta["verde"], Impresora2.tinta["azul"]]

console.log(nivelesTinta)


//Ejercicio 21
let Pantalla = {"pixeles": [["#333", "#123", "#9AF"], ["#777", "#444", "#444"], ["#333", "#444", "#7A7F9D"]], "dimensiones": "1080X720"};

const pixeles = Pantalla.pixeles;

console.log(pixeles);

//Ejercicio 22

let Movil = {"especificaciones": { "ancho": 1920, "altura": 1080 }, "temperatura": "50º"};

let especificaciones = Movil.especificaciones;

console.log(especificaciones)

//Ejercicio 23

let Grupo2 = {"integrantes": ["Pedro", "Paula", "Soledad"], "numIntegrantes": 3};

Grupo2.integrantes.push("Martin", "Pablo");
console.log(Grupo2.integrantes)


//Ejercicio 24

let Pantalla2 = {"pixeles": [["#333", "#123", "#9AF"], ["#777", "#444", "#444"], ["#333", "#444", "#7A7F9D"]], "dimensiones": "1080X720"};

Pantalla2.dimensiones = "1920 x 1080";
console.log(Pantalla2.dimensiones);

//Ejercicio 25

let Led2 = {"rojo": "FF", "verde": "00", "azul": "00", "encendido": true};

Led2.encendido = false;


console.log(Led2.encendido);


//Ejercicio 26

let Movil2 = {"especificaciones": { "ancho": 1920, "altura": 1080 }, "temperatura": "50º"};

Movil2.temperatura =  "20º";
console.log(Movil2.temperatura)

