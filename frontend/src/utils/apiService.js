import axios from 'axios';

const defaultHeaders = {
// Specifies the format of the data being sent in the request body
  'Content-Type': 'application/json',
// Indicates the client's preferred response data format from the server
  'Accept': 'application/json',
};

export const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 10000, // Timeout in milliseconds
  headers: defaultHeaders,
});
