class Card{
    constructor (nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    };
};

class Unit extends Card{
    constructor(nombre, costo, poder, res){
        super(nombre, costo);
        this.poder = poder;
        this.res = res;
    }
    ataque(target){
        target.poder -= this.poder;
        target.res -= this.poder;
    };
};

class Efectos extends Card{
    constructor(nombre, costo, magnitud){
        super(nombre, costo);
        this.magitud = magnitud;
    };
    incrementOrDecreaseStat(target){
        target.poder += (this.magitud);
        target.res += (this.magnitud);
    };
    play(target){
        if(target instanceof Unit){
            this.incrementOrDecreaseStat(target);
        } else {
            throw new Error ("Target must be a unit!");
        }
    }
}

const Algoritmo = new Efectos ("Algoritmo dificil", 2, 3);
const PromesaNoControlada = new Efectos ("rechazo de promesa no controlada", 1, -2);
const ProgramacionPareja = new Efectos ("Programacion en pareja", 3, 2);

//Turno nro 1
/* Jugador 1 invoca al Ninja Cinturon Rojo*/
const NinjaCinturonR = new Unit("Ninja de Cinturon Rojo", 3, 3, 4);
Algoritmo.play(NinjaCinturonR);

//Turno nro 2
const NinjaCinturonN = new Unit("Ninja de Cinturon Negro", 4, 5, 4);
PromesaNoControlada.play(NinjaCinturonR);

//Turno nro 3
ProgramacionPareja.play(NinjaCinturonR);
NinjaCinturonR.ataque(NinjaCinturonN);

console.log(NinjaCinturonN);
console.log(NinjaCinturonR);
