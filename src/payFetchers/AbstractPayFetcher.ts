import { JSDOM } from "jsdom";
import { IPayFetcher } from "./IPayFetcher";
import { AbstractInterpolator } from "./interpolators/AbstractInterpolator";

export interface IExpRange {
    lowerBound: number;
    upperBound: number;
}

export interface IPayData {
    java?: IInterpolatedExtractedExp;
    c?: IInterpolatedExtractedExp;
    cpp?: IInterpolatedExtractedExp;
    python?: IInterpolatedExtractedExp;
    dotNet?: IInterpolatedExtractedExp;
}

export interface IExtractedExp {
    professionalExp: IExpRange[];
    managerExp: IExpRange[];
}

export interface IInterpolatedExtractedExp {
    professionalExp: {
        lowerBound: (number | undefined)[];
        upperBound: (number | undefined)[];
    };
    managerExp: {
        lowerBound: (number | undefined)[];
        upperBound: (number | undefined)[];
    };
}

export interface IExtractedData {
    jobName: string;
    extractedExp: IExtractedExp;
}

export abstract class AbstractPayFetcher implements IPayFetcher {
    abstract getName(): string;
    private _interpolator: AbstractInterpolator;

    constructor(interpolator: AbstractInterpolator) {
        this._interpolator = interpolator;
    }

    public async fetch(): Promise<IPayData> {
        const dom = await this.getRawHtml();
        const extracted: IExtractedData[] = this.extract(dom);
        const result: IPayData = this.parse(extracted);

        return result;
    }

    protected abstract getRawHtml(): Promise<JSDOM>;
    protected abstract extract(dom: JSDOM): IExtractedData[];
    protected abstract parse(data: IExtractedData[]): IPayData;

    protected interpolateExtractedExp({
        managerExp,
        professionalExp
    }: IExtractedExp): IInterpolatedExtractedExp {
        return {
            managerExp: this.interpolatedExpRange(managerExp),
            professionalExp: this.interpolatedExpRange(professionalExp)
        };
    }

    private interpolatedExpRange(
        exps: IExpRange[]
    ): { lowerBound: (number | undefined)[]; upperBound: (number | undefined)[] } {
        let lowerBoundToInterpolate = exps.map(({ lowerBound }) =>
            lowerBound ? lowerBound : undefined
        );
        let upperBoundToInterpolate = exps.map(({ upperBound }) =>
            upperBound ? upperBound : undefined
        );

        const lowerBound = this._interpolator.interpolateArray(
            lowerBoundToInterpolate
        );
        const upperBound = this._interpolator.interpolateArray(
            upperBoundToInterpolate
        );

        return {
            lowerBound,
            upperBound
        };
    }
}
