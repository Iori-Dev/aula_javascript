

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.instagram.com/");
    //window.location = "https://www.instagram.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
var validar = 0;
//var validar;
function validaIdade(idade){
    //var validar;
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;


}

var idade = prompt ("Qual a sua idade?");
validaIdade(idade)
console.log(validar);
//console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
  //  return frase.replace(nome, novo_nome)
}
*/


//alert(soma(5, 10));



//alert(setReplace("Vai Japão", "Japão", "Brasil"));


/*
var d = new Date();
alert(d.getMonth()+ 1);
alert(d.getDay());
alert(d.getMinutes());
alert(d.getMilliseconds());
alert(d.getDate());
*/



/*
var count
for(count=0; count <= 5; count++){
    alert(count);
};
*/



/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
    //count = count + 1;
};
*/


/*
var idade = prompt ("Qual a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/






/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];

//lista.push("uva");
//lista.pop();

//console.log(lista.length);
//console.log(lista.reverse());

//console.log(lista);
//console.log(lista.toString());

//console.log(lista[0]);
//console.log(lista.toString()[0]);

//console.log(lista.join(" | "));

//var nome = "Iori Regis ";
//var n1 = 5;
//var n2 = 7;
//var frase = "japão é o melhor time do mundo";
//alert(nome + "tem " + idade + "anos ");
//alert(idade + idade2); 
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão", "Brasil"));