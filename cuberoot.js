/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

document.getElementById("holder").innerHTML="";
function croot(x){
    var y=0;
    if (x>0) {
        while (Math.pow(y,3)<x) {
            y++;
        }
        if (Math.pow(y,3)==x){
            document.getElementById("holder").innerHTML+="<br>"+"Cuberoot of "+x+" is "+y;
        }
        else {
          document.getElementById("holder").innerHTML+="<br>"+x+" is not a perfect cube";
        }
}
    else {
        while (Math.pow(y,3)>x) {
            y--;
        }
        if (Math.pow(y,3)==x){
          document.getElementById("holder").innerHTML+="<br>"+"Cuberoot of "+x+" is "+y;
        }
        else {
          document.getElementById("holder").innerHTML+="<br>"+x+" is not a perfect cube";
        }
  }
}

for (var i=-100; i<100; i++) {
  croot(i);
}


/*
Exception: SyntaxError: missing ; after for-loop initializer
@Scratchpad/2:36
*/
/*
Exception: SyntaxError: missing ; after for-loop initializer
@Scratchpad/2:36
*/
/*
Exception: SyntaxError: missing ; after for-loop initializer
@Scratchpad/2:36
*/
/*
Exception: SyntaxError: missing ; after for-loop initializer
@Scratchpad/2:36
*/