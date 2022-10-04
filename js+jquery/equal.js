var a = 1;
var b = "1";
var c = 1;
if (a == b) {
    console.log("1");
    if (a === b)
        console.log("2");
    if (a == c)
        console.log("3");
    if (a === c)
        console.log("yes");
    if (a !== b)
        console.log("4");
    if (a != b)
        console.log("5");
}