var observable = Rx.Observable.create(observer =>{
    observer.next(5);
    observer.error();

})
observable.subscribe(
    //Quando o next e executado
    value => console.log(`My Valuie is ${value}` ),
    //Quando ocorre um erro
    err => console.log("error"),
    //quando a operação for finalizada
    () => console.log("Completed")
)
var subject = new Rx.Subject();

var subscription = subject.subscribe(
    value => console.log(`My value is ${value}`),
    err => console.log(`Error Menssagem ${err}`),
    () =>console.log("Completed")
)
//recebe os valor externamente
//subject pode ser inscrito e tambem pode inscrever
//inscrevendo no observable
//quando a duas inscrições de um subject inscrito de observable os valores são iguais
//pois estão inscritos no mesmo subject não em observabels difererentes se fosse subject diferentes os valores tambem seria
var subSource = observable.subscribe(subject)
subject.next(55);
subject.next(34);
subject.complete();
//caso queira criar um a sequenca de numeros, apos ser finalizada executa a função complete automaticamente
var source = Rx.Observable.range(1,10); 
var numbers = [1,8,15,37]
//caso seja um array, apos todos valores serem imprimidos execura automaticamente a função complete
var sorce = Rx.Observable.from(numbers);
//Cold observables a função que envia valores so começa a ser executada quando alguem subscrevee cada inscrito recebe um valor
var sourrce = Rx.Observable.interval(1000);
var subscription = sourrce.subscribe(
    value => console.log(`My value is ${value}`)

)
//Hot Observables, para os valores começarem a ser enviados e rpeciso executar o connect, os inscritos recebem os mesmo valores
var hot = sourrce.publish();
hot.connect();
//variavel para gurada referecia do input e da div
var myInput = document.querySelector("#myInput"),
    myDiv = document.querySelector("#myDiv"),
    //observable para evento de quanto aperta um atecla no input
    inputs = Rx.Observable.fromEvent(myInput, "keyup");

inputs.subscribe(event =>{
    myDiv.innerHTML = event.target.value
})
//Observable a partir de primisses
var myPromisse = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(500);
    }, 2000);
})
var source2 = Rx.Observable.fromPromise(myPromisse);
//Observable com generators
//para retornar elemento por elemento de um array e so color um * no yield(yield*)
function* myCounter(){
    var i = 0;
    while(true){
        yield i++;
    }
}
var counter = myCounter();
//para de executar apos o yield, yield funciona comoum return
counter.next()
//inscrever diretamente no generator fara que com ele seja executado até o final
//uso da função take(take()) faz que possa receber um limitado de valores
Rx.Observable.from(myCounter())