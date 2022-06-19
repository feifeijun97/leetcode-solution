/**
 * Reverse and compare them
 */
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    if (x < 10) return true;
    let y: number = 0;
    let z: number = x;

    while (z > 0) {
        const remainder: number = z % 10;
        z = ~~(z / 10);

        y = (y * 10) + remainder;
    }
    return x === y;
};