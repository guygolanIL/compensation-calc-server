import { AbstractPayFetcher } from "../AbstractPayFetcher";
import { AbstractInterpolator } from "./AbstractInterpolator";

export class LinearInterpolator extends AbstractInterpolator {

    protected interpolate(numbers: (number | undefined)[], start: number, end: number): (number | undefined)[] {

        if(!numbers[start] || !numbers[end]){
            throw 'edges must be defined';
        }

        const diff = Math.abs(<number>numbers[start] - <number>numbers[end]);
        const idxDiff = end - start;

        const toAdd = diff / idxDiff;

        for (let i = start + 1; i < end; i++) {
            const prevNumber = <number>numbers[i - 1]
            numbers[i] = prevNumber + toAdd;
        }

        return numbers;
    }
    
}