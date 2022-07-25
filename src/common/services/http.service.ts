import { HTTP_RESPONSE_STATUS_NO_CONTENT } from 'common/constants';
import { HttpMethod } from 'common/enums';

const sendRequest = async (url: string, { body = null, method } = { method: HttpMethod.Get }) => {
  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url, fetchOptions);

  if (response.ok) {
    return response.status === HTTP_RESPONSE_STATUS_NO_CONTENT ? null : response.json();
  }

  throw new Error(response.statusText);
};

export const sendGetRequest = (url: string) => {
  return sendRequest(url);
};

export const sendPostRequest = (url: string, body: any) => {
  return sendRequest(url, { body, method: HttpMethod.Post });
};

export const sendPutRequest = (url: string, body: any) => {
  return sendRequest(url, { body, method: HttpMethod.Put });
};

export const sendDeleteRequest = (url: string) => {
  return sendRequest(url, { method: HttpMethod.Delete });
};
