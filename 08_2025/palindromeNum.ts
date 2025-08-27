
function isPalindromeNumSring(x: number): boolean {
    
    const s = x.toString();

    for (let i = 0; i < s.length / 2; i++)
    {

        if (s[i] != s[s.length - 1 - i])
        {
            return false;
        }
    }

    return true;
};



function isPalindromeNum(x: number): boolean {
    
    if (x === 0) return true;
    if (x < 0 || (x % 10 === 0)) return false;

    function reverseNumber(num: number): number {
        let reversed = 0;
        while (num > 0) {
            reversed = reversed * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return reversed;
    }

    return x === reverseNumber(x);
};