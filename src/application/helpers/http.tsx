import { Request } from '../interfaces/RequestInterface';

export default function getQuery(): any {
  if (typeof window === 'undefined') {
    return null
  };
  const { location } = window;
  const queryStrings = location && location.search.replace('?', '');
  const queryParams: any = {};

  if (queryStrings) {
    const params = queryStrings.split('&');
    for (let i = 0; i < params.length; i += 1) {
      const pair = params[i].split('=');
      queryParams[pair[0]] = decodeURIComponent(pair[1]);
    }
    return queryParams;
  }
  return null;
}

export async function APIRequest(action: Request) {
  const { REACT_APP_API_ENDPOINT } = process.env;
  const {
    method,
    url,
    data,
  } = action;

  let reqURL = REACT_APP_API_ENDPOINT + url;

  const requestHeaders = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('x-secret-token', 'iasdoebifncpbxgtcahewmqydmeaodqg');

  return (
    fetch(reqURL, {
      method,
      headers: requestHeaders,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        if (res) {
          // * ห้ามลบเคสนี้
          switch (res.code) {
            case 200:
              return res;
            case 401:
              return res;
            case 1003:
              return res;
            case 1005:
              return res;
            default:
              return res;
          }
        }
      })
      .catch(error => {
        console.log('error :>> ', error);
        return error;
      })
  );
}
