//Funções para trabalhar com tempo
var source4 = Rx.Observable
.from([1,2,3,4,5])
.delay(5000)//espera o tempo indicado passar para relixar o envio
.interval(1000)//indica que e pra fazer um envio a cada entervalo de tempo passado
.timer(5000, 1000)//É uma mistura do delay e do interval
.take(5)//para limitar tanto de valor recebido

//acessa o dom a cada tecla que o usuario aperta uma tecla
var myInput = document.querySelector("#myInput"),
    myDiv = document.querySelector("#myDiv"),
    //observable para evento de quanto aperta um atecla no input
    inputs = Rx.Observable.fromEvent(myInput, "keyup");
 var timer = null
//para eviatr ficar acessando DOM a cada tecla, configura um timer de um segundo
//apos um segundo se o usuario ainda tiver escrevendo cancela o evento e repete o processo ate o usuario não digitar mais
//libera apenas apos ultiomo eventp
 inputs.subscribe(event =>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
        myDiv.innerHTML = event.target.value
    },1000)
 })
// para fazer de forma automatica
inputs
.debounce(()=> Rx.Observable.interval(1000))
.subscribe(event =>{
    myDiv.innerHTML = event.target.value
 })