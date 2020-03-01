import { IPayData } from "./AbstractPayFetcher";
import { IIntegrationData } from "./fetchPay";

export class FetchersData {

    private static _instance: FetchersData = new FetchersData();
    private constructor(){};

    private _data: IIntegrationData[] = [];

    public static getInstance() {
        return FetchersData._instance;
    }

    public setData(data: IIntegrationData[]): void {
        this._data = data;
    }
    
    public getData(): IIntegrationData[] {
        return this._data; 
    }


}