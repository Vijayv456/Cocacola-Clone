const offers=document.getElementById('offersText');



    

const text=["20% OFF LOUNGEWEAR","MARCH MADNESS® BOTTLE","BOGO FREE S'WELL","FREE SHIPPING $75+"];




var i=0;
setInterval(function(){
offers.innerHTML=text[i];
    i++;
    if(i>2){
     i=0;
    }
}, 2500);
