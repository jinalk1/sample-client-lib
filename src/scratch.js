const BASE_URL =
  "https://51j1fut727.execute-api.eu-west-1.amazonaws.com/Prod/account";



  
const ApiClient = require("./clients/apiclient");




const tsysClient = new ApiClient.TsysClient(BASE_URL);

const doGet = async id => {
  const result = await tsysClient.get(id);

  console.log(result.data);
};

doGet("0001");
localStorage