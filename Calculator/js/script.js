document.getElementById('wrapper').addEventListener("click",function(){
   //to get the alert message 
   var disp=document.getElementById('disp');
   var Odisp=document.getElementById('Odisp');
//    if(event.target.classList.contains('inputs')){

//    };
    if(event.target.classList.contains('inputs')){
        var inputValue=event.target.value;
        //alert(inputValue);
        disp.value+=inputValue;
    }
    else if(event.target.value==='='){
        Odisp.value=eval(disp.value)
        disp.value=dispvalue.replace("*","x");
        disp.value=dispvalue.replace("/","÷");
        //alert('calculate')

    }
    else if(event.target.value==='C'){
        Odisp.value=null;
        disp.value=null;
        //alert("clear screen");
    }
    else{
        return null;
    }
});
