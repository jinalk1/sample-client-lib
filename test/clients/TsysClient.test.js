const axios = require("axios");
const mockdata = require("./mockdata");
const ApiClient = require("../../src/clients/apiclient");

const BASE_URL = "https://51j1fut727.execute-api.eu-west-1.amazonaws.com/Prod";

const TSYS_ACCOUNT_ID = "0001";

const tsysClient = new ApiClient.TsysClient(BASE_URL);

beforeEach(() => {
  axios.get.mockClear();
});

describe("Tsys client constructor", () => {
  it("should be called with the TSYS Base url", async () => {
    expect(axios.create).toHaveBeenCalledTimes(1);
    expect(axios.create).toHaveBeenCalledWith({ baseURL: BASE_URL });
  });
});

describe("TsysClient getAccountInfo", () => {

  describe("successful response from tsys", () => {

    axios.get.mockImplementation(() =>
      Promise.resolve(mockdata.accountInfoSuccessResponse)
    );

    it("should call tsys once", async () => {
      return await tsysClient.getAccountInfo(TSYS_ACCOUNT_ID).then(() => {
        expect(axios.get).toHaveBeenCalledTimes(1);
      });
    });

    it("should call tsys with the correct path", async () => {
      const expectedPath = "account/" + TSYS_ACCOUNT_ID;
      return await tsysClient.getAccountInfo(TSYS_ACCOUNT_ID).then(() => {
        expect(axios.get).toHaveBeenCalledWith(expectedPath, {});
      });
    });

    it("should return the tsys response payload when the call succeeds", async () => {
      return await tsysClient.getAccountInfo(TSYS_ACCOUNT_ID).then(response => {
        expect(response).toBe(mockdata.accountInfoSuccessResponse);
      });
    });

  });


});
