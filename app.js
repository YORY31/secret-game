//let titulo = document.querySelector('h1');//es para conectar elementos de nuestro index con js y para eso usamos document
//titulo.innerHTML= 'Game of secret number';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Guess the secret number from 1 to 10 .';

let numerosecreto =0;
let intento = 0;
let numerosorteado = [];
let numeromaximo = 10;



function AsignarElementoTexto(elemento, texto){
    let ElementoHtml = document.querySelector(elemento);//es para conectar elementos de nuestro index con js y para eso usamos document
    ElementoHtml.innerHTML = texto;
    return;
 }// esta funcion fue creada como buena practica de codigo para evitar la repeticion de el mismo codigo 
 


    function VerificarIntento(){
    let NumberUser = document.getElementById('ValorUsuario').value;
    //console.log(numerosecreto);

    if(NumberUser == numerosecreto){
        AsignarElementoTexto('p',`Corecto aceptaste el numero en ${intento} ${(intento === 1?'intento': 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarcaja();
    } else 
     {
        if(NumberUser>numerosecreto){
            AsignarElementoTexto('p','el numero es muy alto ');
        }else{
            AsignarElementoTexto('p','muy bajito');
         }
         intento++;
         limpiarcaja();
    }return;
  }
 
 function GenerarAleatorio(){
    let  numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log (numerogenerado);
    console.log(numerosorteado);
    //si ya sortemaos todos los numeros
    if(numerosorteado.length == numeromaximo){
      AsignarElementoTexto('p','ya se asignaron todos los numeros sorteados')

    }else{

    if (numerosorteado.includes(numerogenerado)){
      return GenerarAleatorio();

    } else{
         numerosorteado.push(numerogenerado);
      return numerogenerado ///si el numero non exite en la lista pues si se puede jugar
    }
   }


    
     

 }

 function limpiarcaja(){
    document.querySelector('#ValorUsuario').value = '';
    
 }


function reiniciarjuego(){
   limpiarcaja();//limpiar la caja
   //indicar mensaje de intervalo de nuemros 
   //generar el numero aleatorio
   //desabilitar el boton de nuevo juego

   //inicializar el numero de intento
   condicionesiniciales();
   document.querySelector('#reiniciar').setAttribute('disable', 'true');//desabilitar boton nuevo juego

}

function condicionesiniciales(){
   AsignarElementoTexto('h1', 'Game of Secret Number');
   AsignarElementoTexto('p', `Guess the secret number from 1 to  ${numeromaximo}`);
   numerosecreto=GenerarAleatorio();
   intento = 1;
}
condicionesiniciales();

