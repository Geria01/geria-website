const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const fetchQuery = async (path, params = null) => {
  let url = null;
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`
  } else {
    url = `${baseUrl}/${path}`
  }
  const response = await fetch(`${url}`)
  const data = await response.json()

  return data;
}

export { baseUrl, fetchQuery, strapiUrl }
