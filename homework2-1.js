let num = 266219;
let result = 1;
while(num > 0) {
    result *= num % 10;
    num = Math.floor(num / 10);
}
console.log(result);

result **=3;
console.log(String(result).slice(0,2));
