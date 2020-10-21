/*

// STRING
var frase = "Supermercado Sul América";
console.log(frase.replace("Sul América", "Mineirão")); //imprime "Supermercado Mineirão"

// ARRAY
var lista = ["Matemática", "Português", "Inglês", "Ciências"];
console.log ("Lista: "+lista);
console.log("Tamanho da lista: "+lista.length);
lista.push("História"); //inclui na lista
console.log ("Lista: "+lista);
console.log("Tamanho da lista: "+lista.length); //tamanho do array ou string

lista.pop(); //Remove o último elemento da lista
console.log("Lista:"+lista);
console.log("Tamanho da lista: "+lista.length);
var str = lista.toString(); //tranforma em uma string
console.log(lista[2]); //imprime "Inglês"
console.log(str[0]); //imprime "M"
console.log(lista.join(" | ")); //troca o separador dos elementos
str = lista.join(" | ").toString();
console.log(str.toUpperCase()); //coloca em caixa alta

// DICIONARIO

var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
var frutas = [{nome:"pera",cor:"amerela"},{nome:"goiaba",cor:"vermelha"},{nome:"laranja",cor:"alaranjado"}];
console.log(frutas);
console.log(frutas[2].nome); //imprime laranja

// DATA
var data = new Date();
console.log(data.toLocaleDateString(55)); //formata a data para padrão Brasil

//PROMPT
var idade = prompt("Informe sua idade:");
console.log("Você tem " + idade + " anos");

// FUNÇÕES
function ascii(caracter) //saber o código ascii
{
    return caracter.charCodeAt();
}

console.log(ascii(prompt("Digite um caracter: ")));

*/

function titulo()
{
    if(document.querySelector("a").hidden == true)
        document.querySelector("a").hidden = false;
    else
        document.querySelector("a").hidden = true;
    //document.getElementById("titulo").innerHTML = "CARROS"; //insere elemento HTML dinamicamente
}

function redirecionar()
{
    window.open("https://pixabay.com/pt/vectors/search/carros/"); //abre em nova aba
    //window.location.href = "https://pixabay.com/pt/vectors/search/carros/"; // abre na mesma janela

}

function ampliar(elemento) //elemento html passado como parâmetro
{
    elemento.style = "width: 380px;";
}

function reduzir(elemento)
{
    elemento.style = "width: 180px;";
}

//valor do elemento html recebido como parâmetro
function clicou (v)
{
    if(v == 1)
    {
        document.getElementById("carro1").style.display = 'block';
        document.getElementById("carro2").style.display = 'none';
        document.getElementById("carro3").style.display = 'none';
    }
    else
    {
        if (v ==2)
        {
            document.getElementById("carro2").style.display = 'block';
            document.getElementById("carro1").style.display = 'none';
            document.getElementById("carro3").style.display = 'none';
        }
        else
        {
            document.getElementById("carro3").style.display = 'block';
            document.getElementById("carro1").style.display = 'none';
            document.getElementById("carro2").style.display = 'none';
        }
    }
}
function calculo()
{
    let valor1 = parseInt(prompt("Valor 1:"));
    let valor2 = parseInt(prompt("Valor 2"));
    let valor3 = parseFloat(prompt("Valor 3:"));
    let salary = parseFloat(valor2 * valor3).toFixed(2); // Digite aqui o calculo do salário
    console.log("NUMBER = " + valor1);
    console.log("SALARY = R$ " + salary);
}