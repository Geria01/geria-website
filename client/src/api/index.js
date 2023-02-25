import axios from "axios";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const nextApiUrl = process.env.NEXT_PUBLIC_URL;

const strapiApi = axios.create({
  baseURL: strapiUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

const nextApi = axios.create({
  baseURL: nextApiUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default strapiApi;
export { nextApi };
