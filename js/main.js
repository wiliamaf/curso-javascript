/* STRING */
var frase = "Supermercado Sul América";
console.log(frase.replace("Sul América", "Mineirão")); //imprime "Supermercado Mineirão"

/* ARRAY */
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

/* DICIONARIO */

var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
var frutas = [{nome:"pera",cor:"amerela"},{nome:"goiaba",cor:"vermelha"},{nome:"laranja",cor:"alaranjado"}];
console.log(frutas);
console.log(frutas[2].nome); //imprime laranja

/* DATA */
var data = new Date();
console.log(data.toLocaleDateString(55)); //formata a data para padrão Brasil

/* PROMPT */
var idade = prompt("Informe sua idade:");
console.log("Você tem " + idade + " anos");

/* FUNÇÕES */
function ascii(caracter) //saber o código ascii
{
    return caracter.charCodeAt();
}

console.log(ascii(prompt("Digie um caracter: ")));