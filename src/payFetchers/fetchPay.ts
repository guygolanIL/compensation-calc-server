import { IPayFetcher } from "./IPayFetcher";
import { EthosiaPayFetcher } from "./EthosiaPayFetcher";
import { IPayData } from "./AbstractPayFetcher";
import { LinearInterpolator } from "./interpolators/LinearInterpolator";

export interface IIntegrationData { 
    name: string;
    data: IPayData
};

const fetchers: IPayFetcher[] = [
    new EthosiaPayFetcher(new LinearInterpolator())
];

export const fetchPay = (): Promise<IIntegrationData[]> => {
    try {
        const fetchPromises: Promise<IIntegrationData>[] = fetchers.map(async fetcher => {
            const fetched: IPayData = await fetcher.fetch();
            let result: IIntegrationData;

            result = {
                name: fetcher.getName(),
                data: fetched
            }
            
            return result;
        });

        return Promise.all(fetchPromises);
    } catch (error) {
        console.log(error);
        return Promise.resolve([]);
    }
};
