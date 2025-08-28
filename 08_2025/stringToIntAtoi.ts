function myAtoi(s: string): number {

    const trimmed = s.trim(); // Remove leading and trailing whitespace

    const regex = /^([+-]?\d+)/; // Regular expression to match optional sign and digits at the start

    const match = trimmed.match(regex); // Try to match the pattern in the trimmed string
    
    if (match) {
        const num = parseInt(match[1], 10); // Convert the matched string to an integer
        if (isNaN(num)) {
            return 0; // If conversion fails, return 0
        }
        return Math.max(Math.min(num, 2147483647), -2147483648); // Clamp the value to 32-bit signed integer range
    }
    return 0; // If no match, return 0
};