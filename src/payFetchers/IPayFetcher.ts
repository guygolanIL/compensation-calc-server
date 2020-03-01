import { IPayData } from "./AbstractPayFetcher";

export interface IPayFetcher {
    fetch(): Promise<IPayData>;
    getName(): string;
}