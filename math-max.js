// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));

var number = [13, 44, 79, 45];
var hiest = Math.max(...number);
console.log(hiest);

var num1 = 13;
var num2 = 44;
var num3 = 79;

var hiestNum;

if( num1 >= num2 && num1 >= num3){
    hiestNum = num1;
}else if( num2 >= num1 && num2 >= num3){
    hiestNum = num2;
}else if( num3 >= num1 && num3 >= num2){
    hiestNum = num3;
}
console.log('The Hiest Number is ' + hiestNum);
var hiestNumber = parseInt(hiestNum);
console.log(hiestNumber);


var friends = ['sohag', 'sheik',]

var index = friends.indexOf('sohag');
console.log(index);
