function helloWorld() {
  console.log("Hello World!");
}

const btnConst = document.getElementById("btn-contact");

btnConst.addEventListener("click", helloWorld);


function over() {
    document.write("Mouse Over");
}

function out() {
    document.write("Mouse Out");
}

const mouseResponse = document.getElementsById("division");
mouseResponse.eventListener( "mouseover", over);