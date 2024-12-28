'use strict';

// let ism = prompt("Ismingizni yozing")

// let famil = prompt("Familiya")

// let Yosh = prompt("Yosh")

// let kim = prompt("Kimni yaxshi ko'rasiz")

// let oyin = prompt("yaxshi ko'rgan o'yin")

// let arr = []

// arr.push(ism)

// arr.push(famil)

// if (Yosh > 18) {
//     arr.push("Siz 18 Yoshdan kattaroqsiz")
// } else if (Yosh == 18) {
//     arr.push("Siz 18 Yoshga tengsiz")
// } else { 
//     arr.push("Siz 18 Yoshdan kichik siz")
// }

// arr.push(kim)

// arr.push(oyin)

// let body = document.querySelector("body")

// let div = document.createElement("div")

// arr.forEach(item => {

//     let h2 = document.createElement("h2")

//     let br = document.createElement("br")

//     h2.innerHTML = item

//     div.appendChild(h2)

//     div.appendChild(br)

// });

// body.appendChild(div)

let body = document.querySelector("body")

const arr = ["Ism", "Familiya", "Yosh", "ITga borasizmi?", "Kimni yaxshi ko'rasiz"]

let i = 0


while (i < 5) {
    let qwe = prompt(`${arr[i]}`).trim()
    let h2 = document.createElement("h2");
    h2.innerHTML = qwe;
    body.appendChild(h2);
    console.log(qwe);
    i++;
}


