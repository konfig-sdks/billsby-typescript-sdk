import { Billsby } from "./index";

describe("billsby-typescript-sdk", () => {
    it("initialize client", async () => {
        const billsby = new Billsby({
            apiKey: "API_KEY",
        });
    });
});
