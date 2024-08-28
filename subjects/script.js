//SubjectAsync é bom quando está trabalhando com eventos async e o valores iniciais não importa
//pois ele vai enviar aepnas o ultimo elemnto antes da função complete ser executada
var subject = new Rx.AsyncSubject();
//Behavior subject pode se passar valor inicial esse valor sera utilizado quando algume se inscrever nele e nenhum valor tiver sido enviado ainda
//Se um BehaviorSubject para de enviar valores ele vai receber o ultimo enviado ou o valor inicial caso nenhum tenha cido enviado
var subjectB = new Rx.BehaviorSubject(83);
//ReplaySubject ele amarzena os utimos valores enviados, quando houver um inscrito ele recebera todoas os ultimos valores e possivel escolher quantida a ser amerzenado
//assim o novo inscrito ira receber os valores salvos no buffer
//caso não seja passado quantidade de valores a serem salvos ele ira amarzena todos valores passados na memoria
//tambem e possivel definir quantidade de tempo que os valores estrão disponiveis na memoria passando um segundo argumento
var subjectR = new RX.ReplaySubject(2, 1000);

var subscription = subjectR.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error menssage; ${err}`),
    () => console.log("Completed!")
)
 var counter = 5;
 var interval = setInterval(() => {
    subjectR.next(counter--);
    if(!counter){
        clearInterval(interval);
        subjectR.complete();
    }
 },1000)
//para acessar valor final
subjectB.getValue();