import { Application } from "express";
import bodyParser from 'body-parser';

export const port = 4000;

export const applyConfig = (app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
}