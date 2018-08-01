   
 
var AddButton=document.getElementById('add');
AddButton.addEventListener("click",function(){
    // alert('Button clicked');
    console.log(document.getElementById('value1'));
    var a=(parseInt(document.getElementById('value1').value));
    console.log(document.getElementById('value2'));
    var b=(parseInt(document.getElementById('value2').value));
    var c=Number(a)+Number(b);
    var resultfield=document.getElementById('result');
    resultfield.value=c.disabled=true;
    alert(c);
});
var AddButton=document.getElementById('sub');
AddButton.addEventListener("click",function(){
    // alert('Button clicked');
    console.log(document.getElementById('value1'));
    var a=(parseInt(document.getElementById('value1').value));
    console.log(document.getElementById('value2'));
    var b=(parseInt(document.getElementById('value2').value));
    var c=Number(a)-Number(b);
    var resultfield=document.getElementById('result');
    resultfield.value=c.disabled=true;
    alert(c);
});
var AddButton=document.getElementById('mul');
AddButton.addEventListener("click",function(){
    // alert('Button clicked');
    console.log(document.getElementById('value1'));
    var a=(parseInt(document.getElementById('value1').value));
    console.log(document.getElementById('value2'));
    var b=(parseInt(document.getElementById('value2').value));
    var c=Number(a)*Number(b);
    var resultfield=document.getElementById('result');
    resultfield.value=c.disabled=true;
    alert(c);
});
var AddButton=document.getElementById('div');
AddButton.addEventListener("click",function(){
    // alert('Button clicked');
    console.log(document.getElementById('value1'));
    var a=(parseInt(document.getElementById('value1').value));
    console.log(document.getElementById('value2'));
    var b=(parseInt(document.getElementById('value2').value));
    var c=Number(a)/Number(b);
    var resultfield=document.getElementById('result');
    resultfield.value=c.disabled=true;
    alert(c);
});
/*function addNum{
    var a,b,c;
    a=parseInt(document.getElementById('value1').value);
}*/
