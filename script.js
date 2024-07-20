

function isAnagrama(str1, str2) {


let  texto =  str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
let  texto2 =  str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

let textoorg = texto.split("").sort().join("");
let textoorg2 = texto2.split("").sort().join("");

 if (textoorg === textoorg2) {
    console.log('isso é um anagrama')
 } else {
    console.log('isso não é um anagrama')
 }
}

isAnagrama('listen!', 'silent')