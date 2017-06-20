document.getElementById("holder").innerHTML=""
function divisors (x) {
    var divs= [];
    for (var i=1; i<x; i++) {
        if (x%i==0) {
            divs.push(i);
        }
    }
    //document.getElementById("holder").innerHTML+="<br>"+"Divisors of "+x+" are: "+divs;
    return divs.length;
}
/*for (i=0; i<21; i++) {
    //divisors(i);
}*/

function nthTriangularNo(n) {
    if (n==0) {
        return 0
    }
    else if (n==1) {
        return 1
    }
    r=nthTriangularNo(n-1);
    ans=r+n;
    return ans;
}
//document.getElementById("holder").innerHTML+= "<br>"+
//document.getElementById("holder").innerHTML+="<br>"+nthTriangularNo(498);
/*var n=0;
while (true) {
    if (divisors(n)==500) {
        document.getElementById("holder").innerHTML+= "<br>"+n
    }
    n++;
}*/

