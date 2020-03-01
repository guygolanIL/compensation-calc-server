import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import {
    AbstractPayFetcher,
    IExtractedData,
    IPayData,
    IExpRange
} from "./AbstractPayFetcher";

export class EthosiaPayFetcher extends AbstractPayFetcher {
    getName(): string {
        return 'ethosia';
    }
    protected async getRawHtml(): Promise<JSDOM> {
        const res = await fetch(
            encodeURI("https://www.ethosia.co.il/salary_report?category=105"),
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                    Accept:
                        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "en-US,en;q=0.9,he;q=0.8"
                }
            }
        );
        const text = await res.text();
        return new JSDOM(text);
    }

    protected extract(dom: JSDOM): IExtractedData[] {
        const result: IExtractedData[] = [];

        const trs = dom.window.document.querySelectorAll<HTMLTableRowElement>(
            "div.table-holder table tr"
        );

        const EXP_TYPE_ROW_IDX = 0;
        const EXP_RANGES_ROW_IDX = 1;

        const expRangesTitle: string[] = [];

        for (let j = 0; j < trs.length; j++) {
            let jobName: string = "temp name";
            const professionalExp: IExpRange[] = new Array<IExpRange>();
            const managerExp: IExpRange[] = new Array<IExpRange>();

            const tr = trs[j];
            if (j === EXP_TYPE_ROW_IDX) {
                continue;
            }

            if (j === EXP_RANGES_ROW_IDX) {
                const rangesExpTds = tr.getElementsByTagName("th");
                for (let h = 0; h < rangesExpTds.length; h++) {
                    const td = rangesExpTds[h];
                    if (h === 0) continue;
                    expRangesTitle.push(td.innerHTML);
                }
                continue;
            }

            const tds = tr.getElementsByTagName("td");
            for (let i = 0; i < tds.length; i++) {
                const td = tds[i];
                if (i === 0) {
                    jobName = td.firstElementChild
                        ? td.firstElementChild.innerHTML
                        : "not found";
                    continue;
                }

                const [lower, upper] = td.innerHTML
                    .split("-")
                    .map(range => parseInt(range.trim()));

                const expRange: IExpRange = {
                    lowerBound: lower,
                    upperBound: upper
                };

                let expArray;
                if (i <= 4) {
                    expArray = professionalExp;
                } else {
                    expArray = managerExp;
                }
                expArray[
                    EthosiaPayFetcher.getExpIndexFromTitleRange(
                        expRangesTitle,
                        i
                    )
                ] = expRange;
            }

            result.push({
                jobName: jobName,
                extractedExp: {
                    professionalExp: professionalExp,
                    managerExp: managerExp
                }
            });
        }
        return result;
    }

    protected parse(data: IExtractedData[]): IPayData {
        const payData: IPayData = {};

        data.forEach(({ extractedExp, jobName }) => {
            if (jobName === "Java") {
                payData.java = this.interpolateExtractedExp(extractedExp);
            }
            if(jobName === 'C / C++'){
                payData.c = this.interpolateExtractedExp(extractedExp);
                payData.cpp = this.interpolateExtractedExp(extractedExp);
            }
            if(jobName === 'Python'){
                payData.python = this.interpolateExtractedExp(extractedExp);
            }
            if(jobName === 'Dot.Net'){
                payData.dotNet = this.interpolateExtractedExp(extractedExp);
            }
        });

        return payData;
    }

    private static getExpIndexFromTitleRange(
        expRangesTitle: string[],
        currentIdx: number
    ): number {
        const expTitle = expRangesTitle[currentIdx - 1];
        if (expTitle.includes("-")) {
            return parseInt(expTitle.split("-")[0].trim());
        } else if (expTitle.includes("+")) {
            return 9;
        }
        return 0;
    }
}
