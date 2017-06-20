document.getElementById("holder").innerHTML="";
function factorial(x) {
    if (x<0){return 1;}
    else {
        var rec=factorial(x-1);
        var ans=x*rec;
        return ans;
        }
    }
function eqtofac(n) {
    if (n<2) {
        return false;
    }
    var s= n.toString();
    for(num in s) {
        var c= 0;
        c+=factorial(Number(num));
        if (c==n) {
            return true;
        }
    }
}

function start() {
    for (var i=3; i<2540000 ; i++) {
        if(eqtofac(i)) {
            document.getElementById("holder").innerHTML+="<br>"+i;
        }
    }
}