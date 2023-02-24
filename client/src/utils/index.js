const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const fetchQuery = async (path, params = null) => {
  let url = null;
  if (params !== null) {
    url = `${strapiUrl}/api/${path}/${params}`
  } else {
    url = `${strapiUrl}/api/${path}`
  }
  const response = await fetch(`${url}`)
  const data = await response.json()

  return data;
}

const strapiImageLoader = ({ src, width, quality = null }) => {
  const pattern = new RegExp('^(https?)://');
  return pattern.test(src) ?
    `${src}?w=${width}&q=${quality || 75}` :
    `${strapiUrl}${src}?w=${width}&q=${quality || 75}`;
}

export { fetchQuery, strapiUrl, strapiImageLoader }
