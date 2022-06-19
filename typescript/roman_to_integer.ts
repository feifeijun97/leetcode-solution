/**
 * First solution
 * convert first roman to integer (X)
 * loop starting from second position, convert each roman to integer (Y)
 * compare X is lower than Y, replace X with Y - X
 * otherwise add X into total, replace X with Y
 * return total + X
 */
function romanToInt1(s: string): number {
    const map = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let valToAdd: number = map.get(s.charAt(0))!;
    if (s.length === 1) return valToAdd;

    let total: number = 0;
    for (let i: number = 1; i < s.length; i++) {
        const currValue: number = map.get(s.charAt(i))!;
        if (valToAdd < currValue) {
            valToAdd = currValue - valToAdd;
            continue;
        }
        total += valToAdd;
        valToAdd = currValue;
    }

    return total + valToAdd;

};

/**
 * Second solution
 * scan from left to right
 * convert roman to integer (X)
 * if previous integer value > X, deduct total with X, otherwise add into total
 */
function romanToInt(s: string): number {
    let total: number = 0;
    let prev: number = 0;

    for (let i: number = s.length - 1; i >= 0; i--) {
        let val: number = 0;
        switch (s.charAt(i)) {
            case "I":
                val = 1;
                break;
            case "V":
                val = 5;
                break;
            case "X":
                val = 10;
                break;
            case "L":
                val = 50;
                break;
            case "C":
                val = 100;
                break;
            case "D":
                val = 500;
                break;
            case "M":
                val = 1000;
                break;
            default:
                break;
        }

        if (prev > val) {
            total -= val;
        } else {
            total += val;
        }
        prev = val;
    }
    return total;

};