function isPrime(n) {
  let accumulator = 0;
  for (j = 0; j <= n; j++) {
    if (n % j == 0) {
      accumulator += 1;
    }
  }
  if (accumulator == 2) {
    return true;
  }
}

function showPrimes(n) {
  for (i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

if (isPrime(prompt("check number if prime"))) {
  console.log(true);
} else {
  console.log(false);
}

showPrimes(prompt("show primes up to N"));
