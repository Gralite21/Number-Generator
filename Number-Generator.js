function generateNumber (){
    let min= document.getElementById("min").value;
    let max = document.getElementById("max").value;

    document.getElementById("result").innerText= `${Math.floor(Math.random()*(max-min +1)+min)}`;
}
