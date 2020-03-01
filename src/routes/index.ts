import express, {Application} from "express";
import {FetchersData} from "../payFetchers/FetchersData";

export const applyRoutes = (app: Application) => {


    app.use(express.static("dist/public"));
    app.use('/data', (req, res) => {
        res.send(FetchersData.getInstance().getData());
    });
};
