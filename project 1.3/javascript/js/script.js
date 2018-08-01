//console.log('HELLO WORLD!!!');
/*console.log(12+12);
var a=3;
var b=5;
var res=a*b;
console.log(res);*/
/*for(var i=1;i<=10;i++)
{
    console.log(i);
}*/
/*for(i=11;i<21;i++){
   if(i%2!=0){ 
    console.log(i);
   }
}*/
/*strname.length function for string length*/
/*var a="HAI";
console.log(a.length);
/*program for  storing  letters of a string*/
/*var a="hello";
var b=[];
for(var i=0;i<a.length;i++){
    b[i]=a[i];
}
console.log(a);
console.log(b);*/
/*4.factorial of a given number*/
/*var num=5;
var fact=1;
/*for(i=num;i!=1;i--){
fact=fact*(i-1);
}
console.log(fact);*/
/*for(i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact);
/*palindrome checking*/
/*var str1="MALAYALAM";
var revStr='';
for(i=0;i<reverse(str1);i++){
    revStr=str1[i];
    if(revStr==str1){
    console.log("palindrome");
    }
}*/
/*5 write a program to generate random numbers btween 1 to 10*/
//console.log(Math.floor(Math.random() *10)+1);
/*6 wap to find the area of a polygon shown*/
//(each square has side length  1 unit
/*for square*/
//var n=5;
/*console.log(shapearea(5))
function shapearea(n){
return((n**2)+((n-1)**2));
}*/
//6.find the pair of adjacent elements that has the largest product
//and return that product
/*var num=[3,2,-6,4,5];
console.log(num.length);
for(i=0;i<num.length;i++)
{
 num[i]=num[i]*num[i+1];
}*/
/*console.log(adjElementProduct([3,-2,-5,7,3]))
function adjElementProduct(inputArray){
    var outputArray = [];
    for(var i=0;i<inputArray.length-1;i++){
        var product=inputArray[i] * inputArray[i+1];
       //outputArray[i].push(product);//another way
       outputArray.push(product);//another way
    }
    /*for(i=0;i<outputArray.length;i++){
        if(outputArray[i]>outputArray[i+1]){
            outputArray[i+1]=outputArray[i];
        }
    }*/
    //return Math.max(...outputArray);
//return outputArray[outputArray.length - 1];
//}
//7.implement a function that replaces
//each digits of agiven string with a'#' character.
/*console.log(replaceAllDigitsRegExp('answer is 22'))
function replaceAllDigitsRegExp(input){
    test=/[0-9]/g;//to check in the given string
    var s=input.split('');
    for(i=0;i<s.length;i++){
        if(s[i].match(test)){
            s[i]='#';

        }
    }
    return s.join('');
}*/
/*8.write a program that prints  the number from 1 to 100
but for multiples of three,print "Fizz"insrtead of the number,
and for the multiples of five,print "Buzz" for numbers which are multples of both
three and five print"FizzBuzz".*/
/*for(var i=1;i<100;i++){
if(i%3==0){
    console.log("Fizz");
}
else if(i%5==0){
    console.log("Buzz");
}
if((i%3==0) && (i%5==0)){
    console.log("FizzBuzz")
}

console.log(i);
}*/
/*9.logging in requires a four digit passcode.
to ensure the security of the account,
the account is locked after  10  cosecutive  failed passcode attempts 
we need to implement a function that given  an array of attempts made throughout the day
and the correct passcode checks to see if the account should be locked,
that is 10 or more  consecutive failed passcode attempts  were made.*/
//to check the security of the password
/*console.log(passcodeAttempts(1111,['1111','4444',
'9999','3333',
'8888','2222',
'7777','0000',
'6666','7285',
'5555','1111']));
function passcodeAttempts(){
    var count=0;
    var flag=0;
    for(i=0;i<passcodeAttempts.length;i++){
        if(passcode!=attempts[i]){
            count++;
        }else{
            count=0;
        }
        if(count===10){
             flag=1;
        }
    }
return(flag===1?true:false)
}*/

/*10.consider an arithametic expresson of the form a#b=c.
Check whether it is possible to replace #with one of the four signs:+,-,* or/to obtain a correct expression.*/
//'==='-is used for comaprison.
/*console.log(arithameticExpression(4,5,9));//true
console.log(arithameticExpression(4,3,1));//false
console.log(arithameticExpression(4,5,20));//true
console.log(arithameticExpression(40,5,8));//true
console.log(arithameticExpression(4,5,90));//false
function arithameticExpression(a,b,c){
    if (a+b===c||a-b===c||a*b===c||a/b===c){
        return true;
    }
        else{
            return false;

    }

}*/
/*11.Consider you have three integers.
it is guaranteed that two of these integers are equal to each other
what is the value of the third integer?*/
/*console.log(extraNumber(2,3,3));
function extraNumber(a,b,c){
    return (a === b)?c:(a === c) ? b : a;

}*/
/*12.Consider integer numbers rom 0 to n-1 written down along  the circle in such a way that
the distance between any two mneighbouring numbers  is equal (note that 0 and n-1 nighbourng too)
Given n and firstnumber,find the number which is written in the radially  opposite to firstnumber*/

/*console.log(circleOfNumber(10,2));
function circleOfNumber(n,firstNumber){
    return firstNumber>=(n/2) ? (firstNumber - (n/2)):((n/2)+firstNumber)

}*/
/*13 You are playing a game :
curreently your experience points (XP) total is equal  to "Experience".to reach 
the next level your (XP)should be at least at "threshold".
If you kill the enemy in front of you,
you will gain more experience points in the amount of the "reward".
Given values experience,threshold and reward,
check if you reach the next level after klling the enemy*/

console.log(reachNextlevel(10,20,10));
console.log(reachNextlevel(10,20,20));
console.log(reachNextlevel(10,20,10));
function reachNextLevel(experience,threshhold,reward){
    var value =reward=experience;
    if(value<threshold){
        return false;

    }else
    return true
}












