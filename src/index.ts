import express, { Application } from "express";
import scheduler from "node-schedule";
import { applyRoutes } from "./routes";
import { applyConfig, port } from "./appConfig";
import { fetchPay, IIntegrationData } from "./payFetchers/fetchPay";
import { FetchersData } from "./payFetchers/FetchersData";


const app: Application = express();

applyConfig(app);

const fetchDataRule = "*/30 * * * *";
const job = scheduler.scheduleJob("Fetch data", fetchDataRule, () => {
    console.log("fetching data");
    console.log(new Date());

    fetchPay()
    .then((data: IIntegrationData[]) => {
        FetchersData.getInstance().setData(data);
    });
});

applyRoutes(app);

app.listen(port, () => {

    console.log(`Server started at port ${port}`);
    job.invoke();
});
