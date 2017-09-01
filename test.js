var array = [5,8,9,50,3,4,10,100];
var result = array.sort(function (a,b) {
    return a - b ;
})
if(result.length%2 === 0){
    var i = result.length / 2;
    console.log((result[i - 1]+ result[i]) /2);
}else{
    var i = (result.length - 1) /2;
    console.log(result[i]);
}