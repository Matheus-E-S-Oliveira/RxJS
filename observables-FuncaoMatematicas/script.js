//processar valores de um observable com progamação funcional
var source = Rx.Observable
.range(0.10)
.count(); //retorna quantidade de itens

var source2 = Rx.Observable
.range(0,10)
.count(x => x % 2 ===0 )//retorna quantidade  de numeros pares
var source3  = Rx.Observable
.from([1,3,7,10,6,2,0])
.max()//retorna maior valor
.min()//retona menor valor
var source4 = Rx.Observable
.from([1,2,3,4,5])
.reduce(
    (total, current) => total + current
)//retorna o vallr da soma de todos elemnetos no array
//faz uma redução acumulando os valores em um lugar