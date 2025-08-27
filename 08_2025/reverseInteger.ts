function reverse(x: number): number {
    let reversed = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    reversed *= sign;

    // Check for 32-bit integer overflow
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversed;
};