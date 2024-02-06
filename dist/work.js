function MissingDigit(str) {
    // Split the input into left and right operands
    const parts = str.split('=');
    if (parts[1].includes('x')) {
        // Swap left and right operands if 'x' is in the right operand
        [parts[0], parts[1]] = [parts[1], parts[0]];
    }
    // Extract operands and operator
    const operands = parts[0].split(/(\+|-|\*|\/)/);
    const operator = operands[1].trim();
    const [leftOperand, xOperand] = operands;
    // Evaluate the expression
    const result = eval(parts[1] + operator + leftOperand);
    // Find the missing digit
    const missingDigit = String(result).replace(xOperand.toLowerCase(), '');
    return parseInt(missingDigit, 10);
}
// Example usage
console.log(MissingDigit("3x + 12 = 46")); // Output: 4
export {};
