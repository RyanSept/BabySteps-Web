$(document).ready(
    function(){
        var board= $(".board");
        //set up board
        for (var i=0; i<25; i++) {
             board.append("<div class='button'"+"id="+i+">"+"</div>");
        }
        //get all buttons
        var button= $(".button");
        
        //add a back and front for flipping
        button.append("<div class='front'</div>");
        button.append("<div class='back'</div>");
        
        //get random ship position
        var shipPos= getRandomInt(0,24);
        
        //set the flip event
        button.flip({trigger:'click',axis:'x'});
    
        var moveCounter=0;
        
        //set up click event
        button.on("click",function(){
            //the id of the buttons(0-24) is the guess
            var guess= $(this).prop("id");
            
            if(Number(guess)==Number(shipPos) && moveCounter<=3){
                //background style for .back set to ship.png
                var shipImgStyle={
                    backgroundImage:"url('./ship.png')",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain"
                };
                
                //backside of the clicked button
                var back= $(this).children(".back");
                //set up the image of the
                back.css(shipImgStyle);
                //the literal ship position on window for missile animation
                var p= $(".button[id="+guess+"]").offset();
                
                if (!$("body").hasClass(".missile")){
                    $("body").append("<img class= 'missile' src='m.png'/>");
                    var missile= $(".missile");
                    missile.hide();
                    missile.offset({top:p['top'],left:window.innerWidth});
                    missile.show();
                    missile.animate({
                        left:p.left+60
                    });
                    
                    //once missile hits ship to change .back image after 1300ms 
                    setTimeout(function() {missile.remove();back.css({backgroundImage:"url('fire.png')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"})},1300);
                    
                    //after that, remove the board and add the menu
                    setTimeout(function(){
                        board.fadeOut();
                    },3000);

                    setTimeout(function(){$("body").append("<div class='playagain'><p id='playBtn' onclick='location.reload()'>Play again</p><p id= 'playBtn'>Go back</p></div>")},3600);
                    
                }
            }
            else {
                //alert("you missed sucka!");
            }
        });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//RANDOM COLOR CHOOSER
/*var colours= [];
            for(var i=0; i<3; i++){
                var c=getRandomInt(0,255).toString()
                colours.push(c);
            }
            //alert(colas);
            $("html").css("background-color","rgb("+String(colours[0])+','+String(colours[1])+','+String(colours[2])+")");*/