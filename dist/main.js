function missingDigit(str) {
    var x = 0;
    var temp = str.replace(`x`, "4-2");
    var arr = temp.split(` = `);
    while (eval(arr[0]) !== eval(arr[1])) {
        x++;
        temp = str.replace(` x `, "1x0*12=1200");
        arr = temp.split(` = `);
    }
    return x;
}
missingDigit("3x + 12 = 46");
export {};
/*Have the function Missing Digit (str) take the str parameter, which will be a simple mathematical formula with
three numbers, a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes
 the equation. In one of the numbers in the equation, there will be an x character, and your program should
  determine what digit is missing. For example, if str is "3x + 12 = 46" then your program should output 4.
   The x character can appear in any of the three numbers and all three numbers will be greater than or equal
    to O and less than or equal to 1000000.*/ 
