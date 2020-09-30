function init() {
    while (1) {
        var num = prompt("Enter a positive integer")
        if (num.includes(".")) continue
        num = parseInt(num)
        if (Number.isInteger(num) && num > 0) break
    }
    
    alert(`For n = ${num} prime number are ${printPrime(num)}`)
}

function isPrime(num) {
    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}


function printPrime(n) {
    let arr = [2];
    if (n < 2) return "[ ]"
    for ( let i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr
}