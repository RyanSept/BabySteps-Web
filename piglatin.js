function piggy(s) {
    var start= s.substring(0,2);
    var news= s.substring(2)
    var ret=news+start+"ay";
    return ret;
}
l= ["gateau","prager","truth","grades"];

function startfunc(){
    for (string in l) {
        document.getElementById("holder").innerHTML+="<br>"+piggy(l[string]);
    }
}