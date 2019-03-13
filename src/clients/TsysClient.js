const axios = require('axios');

const getClient = (baseUrl = null) => {
  const options = {
    baseURL: baseUrl,
  };

  const client = axios.create(options);
  return client;
};

exports.TsysClient = class TsysClient {
  constructor(baseUrl = null) {
    this.client = getClient(baseUrl);
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(response => response)
      .catch(error => error);
  }
};
