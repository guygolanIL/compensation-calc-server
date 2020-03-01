export abstract class AbstractInterpolator {
    public interpolateArray(numbers: (number | undefined)[]): (number | undefined)[] {

        for (let i = 0; i < numbers.length - 1;) {
            const lowerBoundElement = numbers[i];

            if (!lowerBoundElement) {i++; continue;};

            for (let j = i + 1; j < numbers.length; j++) {
                const upperBoundElement = numbers[j];
                if(!upperBoundElement) continue;

                this.interpolate(numbers, i, j);
                i = j;
                break;
            }
        }

        return numbers;
    }

    protected abstract interpolate(numbers: (number | undefined)[], start: number, end: number): (number | undefined)[];
}
