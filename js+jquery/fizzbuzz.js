var count = 1;
var output = [];

function fizzbuzz() {
    while (count < 101) {
        if (count % 15 === 0) {
            output.push("fizzbuzz");
        } else if (count % 5 === 0) {
            output.push("buzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}
fizzbuzz();