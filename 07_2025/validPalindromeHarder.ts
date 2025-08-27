function validPalindrome(s: string): boolean {
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let deleted = 0;
    let j = cleaned.length - 1;
    for (let i = 0; i < cleaned.length / 2; i++)
    {
        if (cleaned[i] != cleaned[cleaned.length - 1 - i])
        {
            deleted++;
            if(cleaned[i] === cleaned[j-1])
            {
                j--;
            } else if(cleaned[i+1] === cleaned[j])
            {
                i++;
            } else{
                return false;
            }
        }
        j--;
    }
    return true;
};

// Version from ChatGPT where it uses an extra function to handle the validpalindrome in a cleaner way
function chatGptValidPalindrome(s: string): boolean {
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    function isPalindromeRange(left: number, right: number): boolean {
        while (left < right) {
            if (cleaned[left] !== cleaned[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return isPalindromeRange(left + 1, right) || isPalindromeRange(left, right - 1);
        }
        left++;
        right--;
    }

    return true;
}


// FINAL VERSION MY STYLE
function validPalindromeFull(s: string): boolean {
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let i = 0, j = cleaned.length - 1;

    while (i < j) {
        if (cleaned[i] !== cleaned[j]) {
            const skipLeft = isPalindrome(cleaned, i + 1, j);
            const skipRight = isPalindrome(cleaned, i, j - 1);
            return skipLeft || skipRight;
        }
        i++;
        j--;
    }

    return true;

    function isPalindrome(str: string, l: number, r: number): boolean {
        while (l < r) {
            if (str[l] !== str[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
