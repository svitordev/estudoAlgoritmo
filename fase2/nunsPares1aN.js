function nunsPares1aN(N){
    let count=0;
    for (let i = 1; i <= N; i++) {
       if(i % 2 === 0) count ++;
        
    }
    return count;
}

console.log(nunsPares1aN(10))