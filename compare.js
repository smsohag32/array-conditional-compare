
var myScore = 85 ;
var toScore = 66 ;
var janeScore = 56;
var johnScore = 40;    


var score = [85, 65, 56, 40, 20];
score.forEach(function(element){
    if ( element > 80){
        console.log('you will grad A ')
    }else if( element > 60){
        console.log('your grad is b');
    } else if( element > 40){
        console.log('your grad is c');    
    }else{
        console.log('you failed');
    }
})
// if ( myScore > 80){
//     console.log('you will grad A ')
// }else if( myScore > 60){
//     console.log('your grad is b');
// } else if( myScore > 40){
//     console.log('your grad is c');    
// }else{
//     console.log('you failed');
// }
