let fizzBuzz = (num) => {
    if (typeof num !== "number")
        return console.log("nao eh um numero");
    if (num % 3 == 0 && num % 5 == 0)
        return console.log("fizzbuzz");
    if(num % 3 == 0)
        return console.log("fizz");
    if (num % 5 == 0)
        return console.log("buzz");
    return console.log(num);

}
fizzBuzz("i");