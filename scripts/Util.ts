class Util {
    static distance(a: Pos, b: Pos) {
        const x1 = a.x ?? a.left ?? 0;
        const x2 = b.x ?? b.left ?? 0;
        const y1 = a.y ?? a.top ?? 0;
        const y2 = b.y ?? b.top ?? 0;
        return Math.hypot(x2 - x1, y2 - y1);
    }

    static shuffle<T>(array: Array<T>): Array<T> {
        let currentIndex = array.length;
        let randomIndex: number;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    static randomFromArray<T>(arr: Array<T>): T {
        if (arr.length === 0) return undefined;
        return arr[Math.floor(Math.random() * arr.length)];
    }

    static containsAny<T>(arr1: Array<T>, arr2: Array<T>): boolean {
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.includes(arr2[i]))
                return true;
        }
        return false;
    }

    static gaussianRandom(mean = 0, stdev = 1) {
        const u = 1 - Math.random(); // Converting [0,1) to (0,1]
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        // Transform to the desired mean and standard deviation:
        return z * stdev + mean;
    }
}

interface Pos {
    x?: number
    y?: number
    left?: number
    top?: number
}