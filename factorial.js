document.getElementById("holder").innerHTML=""
function factorial(x) {
    if (x==0){return 1;}
    else {
        rec=factorial(x-1);
        ans=x*rec;
        return ans;
        }
    }
for (var i=0;i<100;i++) {
    document.getElementById("holder").innerHTML+="<br>"+factorial(i);
}
 
/*
Exception: TypeError: document.getElementbyId is not a function
@Scratchpad/6:1:1
*/