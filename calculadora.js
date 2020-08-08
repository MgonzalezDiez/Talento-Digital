function init() {

    var resultado = document.getElementById("resultado");
    var nueve = document.getElementById("nueve");
    var ocho = document.getElementById("ocho");
    var siete = document.getElementById("siete");
    var seis = document.getElementById("seis");
    var cinco = document.getElementById("cinco");
    var cuatro = document.getElementById("cuatro");
    var tres = document.getElementById("tres");
    var dos = document.getElementById("dos");
    var uno = document.getElementById("uno");
    var division = document.getElementById("division");
    var suma = document.getElementById("suma");
    var multiplicacion = document.getElementById("multiplicacion");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");

}
// Eventos en botones
// nueve.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "9";
// }
// ocho.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "8";
// }
// siete.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "7";
// }
// seis.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "6";
// }
// cinco.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "5";
// }
// cuatro.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "4";
// }
// tres.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "3";
// }
// dos.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "2";
// }
// uno.onclick = function (e) {
//     let res = document.getElementById("resultado").innerHTML;
//     if (parseInt(res) === 0) {
//         document.getElementById("resultado").innerHTML = "";
//     }
//     resultado.textContent += "1";
// }
// cero.onclick = function (e) {
//     resultado.textContent += "0";
// }
// division.onclick = function (e) {
//     resultado.textContent += "/";
//     let operacion = "/";
// }
// multiplicacion.onclick = function (e) {
//     resultado.textContent += "*";
//     let operacion = "*";
// }
// suma.onclick = function (e) {
//     resultado.textContent += "+";
//     let operacion = "+"
// }
// resta.onclick = function (e) {
//     resultado.textContent += "-";
//     let operacion = "-"
// }
// reset.onclick = function (e) {
//     document.getElementById("resultado").innerHTML = "0";
// }
// igual.onclick = function (e) {
//     let datos = document.getElementById("resultado").innerHTML;
//     let opSuma = datos.indexOf("+");
//     let opRest = datos.indexOf("-");
//     let opDivi = datos.indexOf("/");
//     let opMult = datos.indexOf("*");

//     if (opSuma != -1) {
//         let data = datos.split("+", 2);
//         let total = parseInt(data[0]) + parseInt(data[1]);
//         document.getElementById("resultado").innerHTML = total;
//     } else if (opRest != -1) {
//         let data = datos.split("-", 2);
//         let total = parseInt(data[0]) - parseInt(data[1]);
//         document.getElementById("resultado").innerHTML = total;
//     } else if (opDivi != -1) {
//         let data = datos.split("/", 2);
//         let total = parseInt(data[0]) / parseInt(data[1]);
//         document.getElementById("resultado").innerHTML = total;
//     } else if (opMult != -1) {
//         let data = datos.split("*", 2);
//         let total = parseInt(data[0]) * parseInt(data[1]);
//         document.getElementById("resultado").innerHTML = total;
//     }
// }

}*/

function insert(num) {
    let valor = document.getElementById("resultado").innerHTML;
    if (valor == null || valor === "") {
        valor = 0
    }
    document.getElementById("resultado").innerHTML = valor + num;
}

function equal() {
    var valor = document.getElementById("resultado").innerHTML;
    if (valor) {
        let arrSort = [];
        let newValor = 0;
        let res = 0;
        for (var i = 0; i < valor.length; i++) {
            switch (valor.substr(i, 1)) {
                case "/":
                    arrSort.push(i)
                    break;
                case "*":
                    arrSort.push(i)
                    break;
                case "+":
                    arrSort.push(i)
                    break;
                case "-":
                    arrSort.push(i)
                    break;
            }
        }
        arrSort.push(i);
        arrSort.sort();

        // burbuja(arrSort);
        let pos1 = 0;
        let pos2 = 0;
        for (var i = 1; i < arrSort.length; i++) {
            pos2 = parseInt(arrSort[i]);
            if (res === 0) {
                newValor = valor.substr(pos1, pos2);
            } else {
                newValor = res + valor.substr(pos1, pos2 - pos1);
            }
            res = eval(newValor);
            newValor = 0;
            pos1 = parseInt(arrSort[i]);
        }
        document.getElementById("resultado").innerHTML = new Intl.NumberFormat("es-CL").format(res);
    }
}

function clearRes() {
    document.getElementById("resultado").innerHTML = "";
}

// function burbuja(arrSort) {
//     for (var i = 1; i < arrSort.length; i++) {
//         for (var j = 0; j < (arrSort.length - i); j++) {
//             if (arrSort[j] > arrSort[j + 1]) {
//                 k = arrSort[j + 1];
//                 arrSort[j + 1] = arrSort[j];
//                 arrSort[j] = k;
//             }
//         }
//     }
//     return arrSort;
// }