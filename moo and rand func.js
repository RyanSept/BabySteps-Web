function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var rnd= getRandomInt(1000,9999);
function moo() {
    if (rnd==0){
        rnd=getRandomInt(1000,9999);
    }
    //alert(rnd);
    var guess= prompt("Guess a 4 digit Number");
    if (guess.length>4 || guess.length<4) {
        alert("Your value is not correct. Guess a 4 digit number");
        moo();
    }
    else {
        cows=0
        bulls=0
        s=String(rnd);
        for (var i=0; i<s.length; i++){
            if (s.indexOf(guess[i])!=-1){
                if(guess.indexOf(guess[i])==s.indexOf(guess[i])){
                    cows++;
                }
                else {
                    bulls++;
                }
            }
        }
        if (cows!=4){
            alert("You have "+cows+" cows and "+bulls+" bulls");
            moo();
        }
        else {
            alert("You have "+cows+" cow(s) and "+bulls+" bull(s)" +"\nYou win!!!");
            rnd= 0;
        }
    }
}