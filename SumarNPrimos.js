function sumPrimes(num) {
  let condicion = true;
  let suma = 0;
  for (let i = 2; i <= num; i++) {
    
    for ( let j = Math.round(i/2); j >= 2; j--){
      
      if ( i % j === 0) {
        condicion = false;
        
        
      }
    }
    if (condicion === true) {
      
      suma = suma + i;
      //console.log("sumamos", i)
      
    }
    condicion = true;
      //console.log(condicion, "suma = ", suma);
  }
  return suma;
}

console.log(sumPrimes(50), "resultado final");