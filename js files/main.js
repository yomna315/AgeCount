let dataNow = new Date();
let birthDay = document.getElementById("birthday");
let counter =document.getElementById("btn");
counter.onclick = function () {
    let birthDay = new Date(document.getElementById("birthday").value);
    let datacount = (dataNow - birthDay)/1000/60/60/24/365;
    let p = document.querySelector("p");
    p.innerHTML = `your age is ${parseInt(datacount)} year.`;
};
