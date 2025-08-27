
function isPalindrome(s: string): boolean {
    
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let i = 0; i < cleaned.length / 2; i++)
    {

        if (cleaned[i] != cleaned[cleaned.length - 1 - i])
        {
            return false;
        }
    }

    return true;
};