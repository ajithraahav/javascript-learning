var myGlobal = 10;

function fun1(){
    var oopsGlobal = 5 ; 
}

function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myglobals: " + myGlobal
    }
    if(typeof oopsGlobal != "undefined"){
        output += "oopsglobals: " + oopsGlobal
    }
    console.log(output);
}

fun1();
fun2();