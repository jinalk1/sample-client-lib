const axios = require("axios");

const getClient = (baseUrl = null) => {
  const options = {
    baseURL: baseUrl
  };

  const client = axios.create(options);

  return client;
};

module.exports = {
  TsysClient: class ApiClient {
    constructor(baseUrl = null) {
      this.client = getClient(baseUrl);
    }

    get(url, conf = {}) {
      return this.client
        .get(url, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error));
    }

    getAccountInfo(accountId, conf = {}) {
      return this.get(accountId, conf)
        .then(response => response)
        .catch(error => error);
    }

    getCreditLimit(accountId, conf={}) {
      
      return this
        .get(accountId)
        .then(response => response)
        .catch(error => error);
    },


    getClient() {
      return this.client;
    }
  },

  get: url => {
    return axios
      .get(url)
      .then(response => response)
      .catch(error => error);
  },




  getCustomerRelationship: (accountId, customerId) => {
    return axios
      .get(accountId)
      .then(response => response)
      .catch(error => error);
  },

  getBillingCycle: accountId => {
    return axios
      .get(accountId)
      .then(response => response)
      .catch(error => error);
  },

  getTransactionCycle: accountId => {
    return axios
      .get(accountId)
      .then(response => response)
      .catch(error => error);
  },

  getTransactionCurrent: accountId => {
    return axios
      .get(accountId)
      .then(response => response)
      .catch(error => error);
  }
};
