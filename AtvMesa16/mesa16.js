function FizzBuzz (...args){
    let multiplos = 1;
    for(let i = 0; i <= 100; i++){
        if (i % multiplos === 0){
            multiplos *=i;
        }
    }
    
    return multiplos;
}
console.log(FizzBuzz(100))