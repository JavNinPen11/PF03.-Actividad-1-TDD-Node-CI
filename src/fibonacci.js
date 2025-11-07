function fibonacci(n){
    if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('solo números enteros ≥ 0');
  }

  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}


export{
    fibonacci
}