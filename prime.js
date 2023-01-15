let a=10;
let count=0;
for(i=2;i<=a/2;i++){
    if(a%i==0){
        count++
    }
}if(count==0){
    console.log(a,"It's prime number")
}else{
    console.log(a,"It's not a prime number")
}