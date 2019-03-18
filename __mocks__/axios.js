'use strict';

const mockdata = require('../test/clients/mockdata')

const axios = jest.genMockFromModule('axios')

const get = jest.fn( arg  => Promise.resolve(mockdata.accountInfoSuccessResponse) )
  
const create = jest.fn( () => ({get}));

axios.create = create;
axios.get = get

module.exports = axios;




