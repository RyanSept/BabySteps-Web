document.getElementById("holder").innerHTML=""
function ispalindrome(n) {
    n=String(n);
    if (n==n.split("").reverse().join("")) {
        return true;
    }
    else {
        return false;
    }
}

l= [];
for (var i=100; i<1000; i++) {
    for (var n=100; n<1000; n++){
        if (ispalindrome(i*n)) {
            l.push(i*n);
        }
    }
}
document.getElementById("holder").innerHTML=Math.max.apply(Math,l);
