function convert(s: string, numRows: number): string {

    // Instead of a zigzag we think of the rows as separate strings and a staircase pattern
    if(numRows === 1)  return s; // If there's only one row, return the original string

    let direction = false; // for the staircase pattern we use a pointer direction as a boolean
    let count = 0;

    let arr = new Array(numRows).fill(""); // Create an array to hold the rows

    for(let i = 0; i<s.length; i++) //for loop that iterates through each character in the string
    {
        let curr = s[i]; // Get the current character
        arr[count] += curr; // Append the current character to the current row

        if (count === 0 || count >= numRows-1) direction = !direction; // Change direction if we hit the top or bottom

        direction ? count++: count--; // Move the pointer up or down
    }
    return arr.join(""); // At the end we concatenate all rows
};