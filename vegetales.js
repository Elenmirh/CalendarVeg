////Establecemos que el valor de lastclick es -1 
let lastclick=-1;

//// Creamos los arrays de las frutas y las verduras
let selectvertem=[];
let selectverpre=[];
let selectverpos=[];

let selectfrutem=[];
let selectfrupre=[];
let selectfrupos=[];

////Los meses son constantes porque nunca van a cambiar su valor
const ENERO = 1;
const FEBRERO =2;
const MARZO = 3;
const ABRIL = 4;
const MAYO = 5;
const JUNIO = 6;
const JULIO = 7;
const AGOSTO = 8;
const SEPTIEMBRE = 9;
const OCTUBRE = 10;
const NOVIEMBRE = 11;
const DICIEMBRE = 12;

const Vegetales = [];

////Se crea un objeto Date sin argumentos que equivale a la fecha y la hora actuales. 
let dia = new Date();

////El nombre de los meses también es una constante porque no puede cambiar
const nombremes = [
    "ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"
];
   
//let mesactual =4;
////El método getMonth() devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año y por eso le sumamos un 1
let mesactual = dia.getMonth() + 1;

////Base de datos con todos los vegetales

    //Vegetales.push ({id:"VETD",nombre:"VerduraEnTemporadaDirecta",tipo:"verdura",initem: 9,fintem: 10,pretem: 7,postem: 12});
    //Vegetales.push ({id:"VETM",nombre:"VerduraEnTemporadaMixta",tipo:"verdura",initem: 9,fintem: 12,pretem: 8,postem: 1});
    //Vegetales.push ({id:"FETI",nombre:"FrutaEnTemporadaInversa",tipo:"fruta",initem: 11,fintem: 2,pretem: 10,postem: 3});
    //Vegetales.push ({id:"VEPI",nombre:"VerduraEnPretemporadaInversa",tipo:"verdura",initem: 2,fintem: 5,pretem: 11,postem: 6});
    //Vegetales.push ({id:"FEPI",nombre:"FrutaEnPostemporadaInversa",tipo:"verdura",initem: 10,fintem: 11,pretem: 9,postem: 3});
    //Vegetales.push ({id:"VETDUSM",nombre:"VerduraEnTempordaDeUnSoloMes",tipo:"verdura",initem: 11,fintem: 11,pretem: 0,postem: 0});
    
    Vegetales.push ({id:"acelga",nombre:"Acelga",tipo:"verdura",initem: 10,fintem: 5,pretem: 9,postem: 7,                   map_tem:"111110000111", map_pre:"000000001000", map_pos:"000001100000"});
    Vegetales.push ({id:"aguacate",nombre:"Aguacate",tipo:"fruta",initem: 11,fintem: 5,pretem: 10,postem: 7,                map_tem:"111110000011", map_pre:"000000000100", map_pos:"000001100000"});
    Vegetales.push ({id:"ajoseco",nombre:"Ajo Seco",tipo:"verdura",initem: 1,fintem: 12,pretem: 0,postem: 0,                map_tem:"111111111111", map_pre:"000000000000", map_pos:"000000000000"});
    Vegetales.push ({id:"ajotierno",nombre:"Ajo Tierno",tipo:"verdura",initem: 12, fintem: 4,pretem: 11,postem: 5,          map_tem:"111100000001", map_pre:"000000000010", map_pos:"000010000000"});
    Vegetales.push ({id:"albahaca",nombre:"Albahaca",tipo:"verdura",initem: 7,fintem: 10,pretem: 6,postem: 11,              map_tem:"000000111100", map_pre:"000001000000", map_pos:"000000000010"});
    Vegetales.push ({id:"albaricoque",nombre:"Albaricoque",tipo:"fruta",initem: 5,fintem: 6,pretem: 0,postem: 7,            map_tem:"000011000000", map_pre:"000000000000", map_pos:"000000100000"});
    Vegetales.push ({id:"alcachofa",nombre:"Alcachofa",tipo:"verdura",initem: 12,fintem: 4,pretem: 11,postem: 5,            map_tem:"111100000001", map_pre:"000000000010", map_pos:"000010000000"});
    Vegetales.push ({id:"apio",nombre:"Apio",tipo:"verdura",initem: 11,fintem: 5,pretem: 10,postem: 6,                      map_tem:"111110000011", map_pre:"000000000100", map_pos:"000001000000"});
    Vegetales.push ({id:"arandano",nombre:"Arándano",tipo:"fruta",initem: 7,fintem: 8,pretem: 0,postem: 0,                  map_tem:"000000110000", map_pre:"000000000000", map_pos:"000000000000"});
    Vegetales.push ({id:"batata",nombre:"Batata",tipo:"verdura",initem: 10,fintem: 1,pretem: 0,postem: 2,                   map_tem:"100000000111", map_pre:"000000000000", map_pos:"011100000000"});    
    Vegetales.push ({id:"berenjena",nombre:"Berenjena",tipo:"verdura",initem: 7,fintem: 9,pretem: 6,postem: 11,             map_tem:"000000111000", map_pre:"000001000000", map_pos:"000000000110"});
    Vegetales.push ({id:"borraja",nombre:"Borraja",tipo:"verdura",initem: 10,fintem: 2,pretem: 9,postem: 3,                 map_tem:"110011000111", map_pre:"000100001000", map_pos:"001000000000"});
    Vegetales.push ({id:"brocoli",nombre:"Brócoli",tipo:"verdura",initem: 11,fintem: 12,pretem: 10,postem: 2,               map_tem:"000000000011", map_pre:"000000000100", map_pos:"111110000000"});    
    Vegetales.push ({id:"calabacin",nombre:"Calabacín",tipo:"verdura",initem: 6,fintem: 9,pretem: 5,postem: 10,             map_tem:"000001111000", map_pre:"000010000000", map_pos:"000000000100"});
    Vegetales.push ({id:"calabaza",nombre:"Calabaza",tipo:"verdura",initem: 9,fintem: 3,pretem: 8,postem: 5,                map_tem:"111000001111", map_pre:"000000010000", map_pos:"000110000000"});
    Vegetales.push ({id:"caqui",nombre:"Caqui",tipo:"fruta",initem: 11,fintem: 12,pretem: 10,postem: 1,                     map_tem:"000000000011", map_pre:"000000000100", map_pos:"100000000000"});
    Vegetales.push ({id:"cardo",nombre:"Cardo",tipo:"verdura",initem: 11,fintem: 3,pretem: 0,postem: 5,                     map_tem:"111000000011", map_pre:"000000000000", map_pos:"000100000000"});
    Vegetales.push ({id:"cebolla",nombre:"Cebolla",tipo:"verdura",initem: 12,fintem: 1,pretem: 11,postem: 2,                map_tem:"100111100001", map_pre:"000000000010", map_pos:"010000000000"});
    Vegetales.push ({id:"cebollaseca",nombre:"Cebolla Seca",tipo:"verdura",initem: 1,fintem: 12,pretem: 0,postem: 0,        map_tem:"111111111111", map_pre:"000000000000", map_pos:"000000000000"});
    Vegetales.push ({id:"cereza",nombre:"Cereza",tipo:"fruta",initem: 5,fintem: 6,pretem: 0,postem: 0,                      map_tem:"000011000000", map_pre:"000000000000", map_pos:"000000000000"});
    Vegetales.push ({id:"chirimoya",nombre:"Chirimoya",tipo:"fruta",initem: 10,fintem: 12,pretem: 9,postem: 0,              map_tem:"000000000111", map_pre:"000000001000", map_pos:"000000000000"});
    Vegetales.push ({id:"chirivia",nombre:"Chirivía",tipo:"verdura",initem: 11,fintem: 5,pretem: 10,postem: 7,              map_tem:"111110000011", map_pre:"000000000100", map_pos:"000001100000"});
    Vegetales.push ({id:"ciruela",nombre:"Ciruela",tipo:"fruta",initem: 6,fintem: 8,pretem: 5,postem: 9,                    map_tem:"000001110000", map_pre:"000010000000", map_pos:"000000001000"});
    Vegetales.push ({id:"colbruselas",nombre:"Col de Bruselas",tipo:"verdura",initem: 11,fintem: 1,pretem: 10,postem: 2,    map_tem:"100000000011", map_pre:"000000000100", map_pos:"010000000000"});
    Vegetales.push ({id:"collisa",nombre:"Col lisa",tipo:"verdura",initem: 11,fintem: 5,pretem: 10,postem: 7,               map_tem:"111110000011", map_pre:"000000000100", map_pos:"000001100000"});
    Vegetales.push ({id:"colrabano",nombre:"Col Rábano",tipo:"verdura",initem: 11,fintem: 5,pretem: 10,postem: 6,           map_tem:"111110000011", map_pre:"000000000100", map_pos:"000001000000"});
    Vegetales.push ({id:"coliflor",nombre:"Coliflor",tipo:"verdura",initem: 11,fintem: 4,pretem: 10,postem: 6,              map_tem:"111100000011", map_pre:"000000000100", map_pos:"000011000000"});
    Vegetales.push ({id:"escarola",nombre:"Escarola",tipo:"verdura",initem: 11,fintem: 4,pretem: 10,postem: 5,              map_tem:"111100000011", map_pre:"000000000100", map_pos:"000010000000"});
    Vegetales.push ({id:"esparrago",nombre:"Espárrago",tipo:"verdura",initem: 3,fintem: 4,pretem: 2,postem: 5,              map_tem:"001100000000", map_pre:"010000000000", map_pos:"000010000000"});
    Vegetales.push ({id:"espinaca",nombre:"Espinaca",tipo:"verdura",initem: 10,fintem: 5,pretem: 9,postem: 6,               map_tem:"111110000111", map_pre:"000000001000", map_pos:"000001000000"});
    Vegetales.push ({id:"frambuesa",nombre:"Frambuesa",tipo:"fruta",initem: 7,fintem: 10,pretem: 6,postem: 0,               map_tem:"000000111100", map_pre:"000001000000", map_pos:"000000000000"});
    Vegetales.push ({id:"fresa",nombre:"Fresa",tipo:"fruta",initem: 5,fintem: 8,pretem: 4,postem: 9,                        map_tem:"000011110000", map_pre:"000100000000", map_pos:"000000001100"});
    Vegetales.push ({id:"granada",nombre:"Granada",tipo:"fruta",initem: 10,fintem: 11,pretem: 9,postem: 12,                 map_tem:"000000000110", map_pre:"000000001000", map_pos:"000000000001"});
    Vegetales.push ({id:"guayaba",nombre:"Guayaba",tipo:"fruta",initem: 10,fintem: 1,pretem: 9,postem: 2,                   map_tem:"100000000111", map_pre:"000000001000", map_pos:"010000000000"});
    Vegetales.push ({id:"guisante",nombre:"Guisante",tipo:"verdura",initem: 3,fintem: 4,pretem: 2,postem: 5,                map_tem:"001100000000", map_pre:"010000000000", map_pos:"000010000000"});
    Vegetales.push ({id:"haba",nombre:"Haba",tipo:"verdura",initem: 2,fintem: 5,pretem: 11,postem: 0,                       map_tem:"011110000000", map_pre:"100000000011", map_pos:"000000000000"});
    Vegetales.push ({id:"higo",nombre:"Higo",tipo:"fruta",initem: 8,fintem: 9,pretem: 7,postem: 10,                         map_tem:"000000011000", map_pre:"000000100000", map_pos:"000000000100"});
    Vegetales.push ({id:"hinojo",nombre:"Hinojo",tipo:"verdura",initem: 12,fintem: 5,pretem: 11,postem: 0,                  map_tem:"111110000001", map_pre:"000000000010", map_pos:"000000000000"});
    Vegetales.push ({id:"judiaverde",nombre:"Judía verde",tipo:"verdura",initem: 6,fintem: 9,pretem: 5,postem: 11,          map_tem:"000001111000", map_pre:"000010000000", map_pos:"000000000110"});
    Vegetales.push ({id:"kale",nombre:"Kale",tipo:"verdura",initem: 10,fintem: 5,pretem: 0,postem: 0,                       map_tem:"111110000111", map_pre:"000000000000", map_pos:"000000000000"});
    Vegetales.push ({id:"kiwi",nombre:"Kiwi",tipo:"fruta",initem: 10,fintem: 2,pretem: 9,postem: 3,                         map_tem:"110000000111", map_pre:"000000001000", map_pos:"001000000000"});
    Vegetales.push ({id:"lechuga",nombre:"Lechuga",tipo:"verdura",initem: 11,fintem: 5,pretem: 9,postem: 7,                 map_tem:"111110000011", map_pre:"000000001100", map_pos:"000001100000"});
    Vegetales.push ({id:"lima",nombre:"Lima",tipo:"fruta",initem: 10,fintem: 11,pretem: 9,postem: 12,                       map_tem:"000000000110", map_pre:"000000001000", map_pos:"000000000001"});
    Vegetales.push ({id:"limon",nombre:"Limón",tipo:"fruta",initem: 11,fintem: 4,pretem: 10,postem: 5,                      map_tem:"111100000011", map_pre:"000000000100", map_pos:"000010000000"});
    Vegetales.push ({id:"lombarda",nombre:"Lombarda",tipo:"verdura",initem: 11,fintem: 5,pretem: 10,postem: 7,              map_tem:"111110000011", map_pre:"000000000100", map_pos:"000001100000"});
    Vegetales.push ({id:"maiz",nombre:"Maíz",tipo:"verdura",initem: 7,fintem: 10,pretem: 6,postem: 11,                      map_tem:"000000111100", map_pre:"000001000000", map_pos:"000000000010"});
    Vegetales.push ({id:"mandarina",nombre:"Mandarina",tipo:"fruta",initem: 10,fintem: 3,pretem: 9,postem: 5,               map_tem:"111000000111", map_pre:"000000001000", map_pos:"000110000000"});
    Vegetales.push ({id:"mango",nombre:"Mango",tipo:"fruta",initem: 9,fintem: 11,pretem: 8,postem: 12,                      map_tem:"000000001110", map_pre:"000000010000", map_pos:"000000000001"});
    Vegetales.push ({id:"manzana",nombre:"Manzana",tipo:"fruta",initem: 9,fintem: 11,pretem: 8,postem: 12,                  map_tem:"000000001110", map_pre:"000000010000", map_pos:"000000000001"});
    Vegetales.push ({id:"melocoton",nombre:"Melocotón",tipo:"fruta",initem: 6,fintem: 8,pretem: 5,postem: 10,               map_tem:"000001110000", map_pre:"000010000000", map_pos:"000000001100"});
    Vegetales.push ({id:"melon",nombre:"Melón",tipo:"fruta",initem: 7,fintem: 9,pretem: 6,postem: 10,                       map_tem:"000000111000", map_pre:"000001000000", map_pos:"000000000100"});
    Vegetales.push ({id:"membrillo",nombre:"Membrillo",tipo:"fruta",initem: 10,fintem: 12,pretem: 0,postem: 2,              map_tem:"000000000111", map_pre:"000000000000", map_pos:"110000000000"});
    Vegetales.push ({id:"nabo",nombre:"Nabo",tipo:"verdura",initem: 11,fintem: 5,pretem: 9,postem: 6,                       map_tem:"111110000011", map_pre:"000000001100", map_pos:"000001000000"});
    Vegetales.push ({id:"naranja",nombre:"Naranja",tipo:"fruta",initem: 11,fintem: 5,pretem: 0,postem: 6,                   map_tem:"111110000011", map_pre:"000000000000", map_pos:"000001000000"});
    Vegetales.push ({id:"nectarina",nombre:"Nectarina",tipo:"fruta",initem: 6,fintem: 7,pretem: 5,postem: 8,                map_tem:"000001100000", map_pre:"000010000000", map_pos:"000000010000"});
    Vegetales.push ({id:"nispero",nombre:"Níspero",tipo:"fruta",initem: 4,fintem: 5,pretem: 3,postem: 6,                    map_tem:"000110000000", map_pre:"001000000000", map_pos:"000001000000"});
    Vegetales.push ({id:"pakchoi",nombre:"Pack choi",tipo:"verdura",initem: 10,fintem: 5,pretem: 9,postem: 6,               map_tem:"111110000111", map_pre:"000000001000", map_pos:"000001000000"});
    Vegetales.push ({id:"papaya",nombre:"Papaya",tipo:"fruta",initem: 9,fintem: 1,pretem: 8,postem: 2,                      map_tem:"100000001111", map_pre:"000000010000", map_pos:"010000000000"});
    Vegetales.push ({id:"paraguaya",nombre:"Paraguaya",tipo:"fruta",initem: 6,fintem: 7,pretem: 5,postem: 8,                map_tem:"000001100000", map_pre:"000010000000", map_pos:"000000010000"});
    Vegetales.push ({id:"patata",nombre:"Patata",tipo:"verdura",initem: 1,fintem: 12,pretem: 0,postem: 0,                   map_tem:"111111111111", map_pre:"000000000000", map_pos:"000000000000"});
    Vegetales.push ({id:"pepino",nombre:"Pepino",tipo:"verdura",initem: 6,fintem: 10,pretem: 5,postem: 0,                   map_tem:"000001111100", map_pre:"000010000000", map_pos:"000000000000"});
    Vegetales.push ({id:"pera",nombre:"Pera",tipo:"fruta",initem: 7,fintem: 10,pretem: 0,postem: 0,                         map_tem:"000000111100", map_pre:"000000000000", map_pos:"000000000000"});
    Vegetales.push ({id:"perejil",nombre:"Perejil",tipo:"verdura",initem: 9,fintem: 2,pretem: 8,postem: 3,                  map_tem:"110011001111", map_pre:"000100010000", map_pos:"000000100000"});
    Vegetales.push ({id:"pimiento",nombre:"Pimiento",tipo:"verdura",initem: 7,fintem: 9,pretem: 6,postem: 10,               map_tem:"000000111000", map_pre:"000001000000", map_pos:"000000000100"});
    Vegetales.push ({id:"pitahaya",nombre:"Pitahaya",tipo:"fruta",initem: 9,fintem: 12,pretem: 7,postem: 2,                 map_tem:"000000001111", map_pre:"000000110000", map_pos:"110000000000"});
    Vegetales.push ({id:"platano",nombre:"Plátano",tipo:"fruta",initem: 1,fintem: 12,pretem: 0,postem: 0,                   map_tem:"111111111111", map_pre:"000000000000", map_pos:"000000000000"});
    Vegetales.push ({id:"pomelo",nombre:"Pomelo",tipo:"fruta",initem: 11,fintem: 2,pretem: 10,postem: 3,                    map_tem:"110000000011", map_pre:"000000000100", map_pos:"001000000000"});
    Vegetales.push ({id:"puerro",nombre:"Puerro",tipo:"verdura",initem: 10,fintem: 5,pretem: 9,postem: 6,                   map_tem:"111110000111", map_pre:"000000001000", map_pos:"000001000000"});
    Vegetales.push ({id:"rabano",nombre:"Rábano",tipo:"verdura",initem: 10,fintem: 5,pretem: 9,postem: 6,                   map_tem:"111110000111", map_pre:"000000001000", map_pos:"000001000000"});
    Vegetales.push ({id:"remolacha",nombre:"Remolacha",tipo:"verdura",initem: 10,fintem: 6,pretem: 9,postem: 7,             map_tem:"111111000111", map_pre:"000000001000", map_pos:"000000100000"});
    Vegetales.push ({id:"sandia",nombre:"Sandía",tipo:"fruta",initem: 6,fintem: 9,pretem: 5,postem: 10,                     map_tem:"000001111000", map_pre:"000010000000", map_pos:"000000000100"});
    Vegetales.push ({id:"tomate",nombre:"Tomate",tipo:"verdura",initem: 7,fintem: 10,pretem: 5,postem: 11,                  map_tem:"000000111100", map_pre:"000011000000", map_pos:"000000000010"});
    Vegetales.push ({id:"uva",nombre:"Uva",tipo:"fruta",initem: 9,fintem: 11,pretem: 8,postem: 12,                          map_tem:"000000001110", map_pre:"000000010000", map_pos:"000000000001"});
    Vegetales.push ({id:"zanahoria",nombre:"Zanahoria",tipo:"verdura",initem: 11,fintem: 6,pretem: 9,postem: 8,             map_tem:"111111000011", map_pre:"000000001100", map_pos:"000000110000"});
  
 