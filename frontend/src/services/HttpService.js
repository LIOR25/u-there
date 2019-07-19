const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';

import Axios from 'axios';
var axios = Axios.create({
  withCredentials: true
});

async function ajax(endpoint, method = 'get', data = null, params ) {
  console.log('ppp', endpoint, method, data, params)
  //   if (data) var { params } = data;
  //   console.log(' in ajax', params);

  const res = await axios({
    url: `${BASE_URL}${endpoint}`,
    method,
    data,
    params
  });
  return res.data;
}

export default {
  ajax
};
