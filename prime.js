let a=10;
let count=0;
for(i=2;i<=a/2;i++){
    if(a%i==0){
        count++
    }
}
(count==0) ? console.log(a, "is a prime number): console.log(a, "is not a prime number")