//map serve para mudar estrutura de uma lista original para se adequar ao qu eprecisa no momento
var itens = [
    {a: 1},
    {a: 2},
    {a: 3},
    {a: 4},
    {a: 5}
]
//filter
var vet = [1,2,3,4,5,6];
//find
var people = [
    {name: "Rick", age: 10},
    {name: "Rose", age: 25},
    {name: "Cassandra", age: 13},
    {name: "Henry", age: 22} 
]
var source = Rx.Observable.from(itens);

var subscription = source
 .map( x => { return { value: x.a } } )//reorganiza lista substituindo variavel a por value
 .filter( x => x % 2 ===0 )// retorna uma lista filtrada com elementos que sastisfazeram a condição passada
 .take(3) // indica numero maximo que pode ser recbido não importando quantos tenha depois dele
 .find(x => x.age > 18)//Procura o primeiro elemento que satisfaz a condição passada
 .first( x => x.name[0] === "R")//Retorna primeiro elemneto que satisfaz a condição passado
 .last( x => x.name[0] === "R" )//Reotna ultimo elemento que sastisfaz a confição passada
 .pluck('name')// Retira o campo passado da lista e retorna ele em uma nova lista
 .subscribe(
    x => console.log(x)
 )