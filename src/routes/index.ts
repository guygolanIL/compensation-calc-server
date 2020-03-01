import { Application } from "express";
import { FetchersData } from "../payFetchers/FetchersData";

export const applyRoutes = (app: Application) => {
    app.get('/', (req, res) => {
        res.send('hello world');
    });

    app.use('/data', (req, res) => {
        res.send(FetchersData.getInstance().getData());
    });
}